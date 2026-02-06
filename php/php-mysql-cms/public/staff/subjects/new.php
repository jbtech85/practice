<?php 
require_once('../../../private/initialize.php'); 

$test = $_GET['test'] ?? '';

if($test == '404') {
  error_404();
} elseif($test == '500') {
  error_500();
} elseif($test == 'redirect') {
  header("Location: index.php" . url_for('/staff/subjects/index.php'));
  exit;
}

$page_title = 'Create Subject';

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
      <a class="back-link" href="<?= url_for('/staff/subjects'); ?>">&laquo; Back to List</a>

      <div class="subject new">
        <h1>Create Subject</h1>

        <form action="<?= url_for('/staff/subjects/create.php'); ?>" method="post">
          <dl>
            <dt><label for="menu_name">Menu Name</label></dt>
            <dd><input type="text" name="menu_name" value="" /></dd>
          </dl>
          <dl>
            <dt><label for="position">Position</label></dt>
            <dd>
              <select name="position">
                <option value="1">1</option>
              </select>
            </dd>
          </dl>
          <dl>
            <dt><label for="visible">Visible</label></dt>
            <dd>
              <input type="hidden" name="visible" value="0" />
              <input type="checkbox" name="visible" value="1" />
            </dd>
          </dl>
          <div id="operations">
            <input type="submit" value="Create Subject" />
          </div>
        </form>
      </div>
    </div>

    <?php include(SHARED_PATH . '/staff_footer.php'); ?>
  </body>
</html>