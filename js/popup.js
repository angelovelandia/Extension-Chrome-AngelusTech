$(function () {

    var gamesVid = '<div align="center"><iframe width="560" height="315" src="https://www.youtube.com/embed/iXORtbjhlP8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe><iframe width="560" height="315" src="https://www.youtube.com/embed/8EEOV8oFZ90" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe><iframe width="560" height="315" src="https://www.youtube.com/embed/KQioezkbllc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe><iframe width="560" height="315" src="https://www.youtube.com/embed/jL9IM2wgOhw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>';

    var vidOffice = '<div align="center"><iframe width="560" height="315" src="https://www.youtube.com/embed/x-OWLjwP09c" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe><iframe width="560" height="315" src="https://www.youtube.com/embed/dL0WOjZ2aFo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>';

    var supportVid = '<div align="center"><iframe width="560" height="315" src="https://www.youtube.com/embed/iN_u6Fm1TFg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe><iframe width="560" height="315" src="https://www.youtube.com/embed/9oxft8f1vas" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe><iframe width="560" height="315" src="https://www.youtube.com/embed/yA1ewfA-vg0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>';

    var windowsVid = ' <div align="center"><iframe width="560" height="315" src="https://www.youtube.com/embed/jn2keGPHLYY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>    <iframe width="560" height="315" src="https://www.youtube.com/embed/ZdYlfB3p5GE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe><iframe width="560" height="315" src="https://www.youtube.com/embed/xpjrSFJgz4I" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe><iframe width="560" height="315" src="https://www.youtube.com/embed/rqvVJZ4RIUw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>';

    var programsVid = '<div align="center"><iframe width="560" height="315" src="https://www.youtube.com/embed/tcJpNtRK9oc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe><iframe width="560" height="315" src="https://www.youtube.com/embed/eLUf-TNC1ug" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe><iframe width="560" height="315" src="https://www.youtube.com/embed/3W4Zge045Bk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe><iframe width="560" height="315" src="https://www.youtube.com/embed/KQioezkbllc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe><iframe width="560" height="315" src="https://www.youtube.com/embed/dL0WOjZ2aFo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>';

    var sisOpera = '<div align="center"><iframe width="560" height="315" src="https://www.youtube.com/embed/NlfRw5Ug4yE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe><iframe width="560" height="315" src="https://www.youtube.com/embed/PeqIJGH-W8E" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>';

    $('#selectType').on('change', () => {
        var t = $('#selectType').val();
        if (t == '0') {
            $('#vistaGeneral').html('');
        } else if (t == '1') {
            $('#vistaGeneral').html(gamesVid);
        } else if (t == '2') {
            $('#vistaGeneral').html(vidOffice);
        } else if (t == '3') {
            $('#vistaGeneral').html(supportVid);
        } else if (t == '4') {
            $('#vistaGeneral').html(windowsVid);
        } else if (t == '5') {
            $('#vistaGeneral').html(programsVid);
        } else if (t == '6') {
            $('#vistaGeneral').html(sisOpera);
        }
    });
});