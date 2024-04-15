<?php 
require_once "config.php";

$sql = "SELECT * FROM slides";
$result = $conn->query($sql);

$slides = array();

if ($result->num_rows > 0) {
    while($row = $result->fetch_assoc()) {
        // Create an associative array for each slide
        $slide = array(
            'title' => $row['title'],
            'description' => $row['description'],
            'image' => $row['image']
        );
        // Add the slide array to the slides array
        $slides[] = $slide;
    }
    // Convert the slides array to JSON format
    $jsonSlides = json_encode($slides);
    // Output the JSON data
    echo $jsonSlides;
} else {
    echo "0 results";
}

$conn->close();
?>
