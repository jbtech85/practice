import express from 'express';
import { MongoClient, ServerApiVersion } from 'mongodb';


const articleInfo = [
  { name: 'learn-node', upvotes: 0, comments: [] },
  { name: 'learn-react', upvotes: 0, comments: [] },
  { name: 'mongodb', upvotes: 0, comments: [] }
];

const app = express();
app.use(express.json());

let db;
async function connectToDB() {
    const uri = 'mongodb://127.0.0.1:27017';

  const client = new MongoClient(uri, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true
    }
  });

  await client.connect();

  db = client.db('full-stack-react-db');
}

app.get('/api/articles/:name', async (reque, respo) => {
  const { name } = reque.params;
  const article = await db.collection('articles').findOne({ name });
  respo.json(article);
});

app.post('/api/articles/:name/upvote', async (reque, respo) => {
  const { name } = reque.params;
  const updatedArticle = await db.collection('articles').findOneAndUpdate({ name },{
    $inc: { upvotes: 1 }
  }, {
    returnDocument: "after"
  });

  respo.json(updatedArticle);
});

// route handler
app.post('/api/articles/:name/comments', async (req, res) => {
  const { name } = req.params;
  const { postedBy, text } = req.body;
  const newComment = { postedBy, text };

  const updatedArticle = await db.collection('articles').findOneAndUpdate({ name }, {
    $push: { comments: newComment }
  }, {
    returnDocument: 'after',
  });

  res.json(updatedArticle)
});

// app.get('/hello', (req,res) => {
//   res.send('Hello from a GET endpoint');
// });

// app.get('/hello/:name', function(req, res) {
//   res.send('Hey there, ' + req.params.name)
// })

// app.post('/hello', function(req,res) {
//   res.send('req.body.name is ' + req.body.name);
// });

async function start() {
  await connectToDB();

  app.listen(8000, function() {
    console.log('Server is listening tune in to port 8000');
  });
}

start();