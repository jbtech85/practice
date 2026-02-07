<?php
  require_once('../../../private/initialize.php');
  
  $subjects = [
    ['id' => '1', 'position' => '1', 'visible' => '1', 'page_name' => 'Page 1'],
    ['id' => '2', 'position' => '2', 'visible' => '1', 'page_name' => 'Page 2'],
    ['id' => '3', 'position' => '3', 'visible' => '1', 'page_name' => 'Page 3'],
    ['id' => '4', 'position' => '4', 'visible' => '1', 'page_name' => 'Page 4']
  ];

  $page_title = 'Pages'; 
  
?>

<!DOCTYPE html>
<html lang="en">
  <?php include(SHARED_PATH . '/staff_head.php'); ?>

  <body>
    <?php 
      include(SHARED_PATH . '/staff_header.php'); 
      include(SHARED_PATH . '/staff_navigation.php');
    ?>

    <div id="content">
      <div class="pages listing">
        <h1>Pages</h1>

        <div class="actions">
          <a class="action" href="<?= url_for('/staff/pages/new.php'); ?>">Create New Page</a>
        </div>

        <table class="list">
          <tr>
            <th>ID</th>
            <th>Position</th>
            <th>Visible</th>
            <th>Name</th>
            <th>&nbsp;</th>
            <th>&nbsp;</th>
            <th>&nbsp;</th>
          </tr>

          <?php foreach($subjects as $subject) { 
            $scrubbedID = htmlspecialchars(urlencode($subject['id']));  ?>
            
            <tr>
              <td><?= htmlspecialchars($subject['id']); ?></td>
              <td><?= htmlspecialchars($subject['position']); ?></td>
              <td><?= $subject['visible'] == 1 ? 'true' : 'false'; ?></td>
              <td><?= htmlspecialchars($subject['page_name']); ?></td>
              <td><a class="action" href="<?= url_for('/staff/pages/show.php?id=' . $subject['id']); ?>">View</a></td>
              <td><a class="action" href="<?= url_for('/staff/pages/edit.php?id=' . $scrubbedID); ?>">Edit</a></td>
              <td><a class="action" href="">Delete</a></td>
            </tr>
          <?php } ?>
        </table>
      </div>  
    </div>
  
    
    <?php include(SHARED_PATH . '/staff_footer.php'); ?>
  </body>
</html>