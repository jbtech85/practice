<?php 
require_once('../../../private/initialize.php'); 

if(!isset($_GET['id'])) {
  header("Location: " . url_for('/staff/subjects'));
  exit;
}
$id = $_GET['id'];
$scrubbedID = htmlspecialchars(urlencode($_GET['id'])); 

if($_SERVER['REQUEST_METHOD'] == 'POST') {

  // Handle form values sent by new.php

  $menu_name = $_POST['menu_name'] ?? '';
  $position = $_POST['position'] ?? '';
  $visible = $_POST['visible'] ?? '';

  echo "Form parameters<br />";
  echo "Menu name: " . $menu_name . "<br />";
  echo "Position: " . $position . "<br />";
  echo "Visible: " . $visible . "<br />";

} else {
  // 
}

$page_title = 'Edit Subject';

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

      <div class="subject edit">
        <h1>Edit Subject</h1>

        <form action="<?= url_for('/staff/subjects/edit.php?id=' . $scrubbedID); ?>" method="post">
          <dl>
            <dt><label for="menu_name">Menu Name</label></dt>
            <dd><input type="text" name="menu_name" value="<?= $menu_name ?>" /></dd>
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
            <input type="submit" value="Edit Subject" />
          </div>
        </form>
      </div>
    </div>

    <?php include(SHARED_PATH . '/staff_footer.php'); ?>
  </body>
</html>