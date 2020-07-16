
$('#index-output').click(function () {
    $('#output-index').show();
    $('#output-code').hide();
    $('#output-solve').hide();
    $('#output-codejs').hide();
    $('#output-solvejs').hide();

});
$('#code-output').click(function () {
    $('#output-index').hide();
    $('#output-code').show();
    $('#output-solve').hide();
    $('#output-codejs').hide();
    $('#output-solvejs').hide();
    $("#output-index.active").removeClass("active");
});
$('#solve-output').click(function () {
    $('#output-index').hide();
    $('#output-code').hide();
    $('#output-solve').show();
    $('#output-codejs').hide();
    $('#output-solvejs').hide();
});
$('#codejs-output').click(function () {
    $('#output-index').hide();
    $('#output-code').hide();
    $('#output-solve').hide();
    $('#output-codejs').show();
    $('#output-solvejs').hide();
});
$('#solvejs-output').click(function () {
    $('#output-index').hide();
    $('#output-code').hide();
    $('#output-solve').hide();
    $('#output-codejs').hide();
    $('#output-solvejs').show();
});
