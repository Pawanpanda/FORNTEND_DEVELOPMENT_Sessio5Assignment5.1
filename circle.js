<!DOCTYPE html>
<html>
<body>

<h2>Area</h2>

<p>The area of the cicle is:</p>

<p id="demo"></p>

<script>
function areaOfCircle(r,pi) { 
	return pi*r*r;
}
document.getElementById("demo").innerHTML = areaOfCircle(5,3.14);
</script>

</body>
</html>
