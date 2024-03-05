<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>KOMPETEN & BELUM</title>
</head>
<body>
    <?php $nilai = 90; ?>
    <p>nilai <?= $nilai ?> dinyatakan <span style="color: <?= $nilai >= 75 ? "green" : "red" ?>;"><?= $nilai >= 75 ? "KOMPETEN" : "BELUM KOMPETEN" ?></span></p>
</body>
</html>