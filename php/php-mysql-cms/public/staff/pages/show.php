<?php

require_once('../../../private/initialize.php');

$id = $_GET['id'] ?? '1';


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
      <a href="<?= url_for('/staff/pages/index.php'); ?>">&laquo; Back to Page List</a><br />
      <?= "Page ID: " . urlencode($id) ?>
    </div>

    <?php include(SHARED_PATH . '/staff_footer.php'); ?>
  </body>
</html>