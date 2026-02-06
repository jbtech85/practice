<?php require_once('../../private/initialize.php'); ?>

<?php $page_title = 'Staff Menu'; ?>

<!DOCTYPE html>
<html lang="en">
  <?php include(SHARED_PATH . '/staff_head.php'); ?>

  <body>
    <?php 
      include(SHARED_PATH . '/staff_header.php'); 
      include(SHARED_PATH . '/staff_navigation.php');
    ?>

    <div id="content">
      <div id="main-menu">
        <h2>Main Menu</h2>
        <ul>
          <li><a href="<?= url_for('/staff/subjects/index.php'); ?>">Subjects</a></li>
          <li><a href="<?= url_for('/staff/pages/index.php'); ?>">Pages</a></li>
        </ul>
      </div>
    </div>

    <?php include(SHARED_PATH . '/staff_footer.php'); ?>
  </body>
</html>