$(document).ready(function () {
    var Price = 0;

    $('#btnSort').click(function (e) {

        sortSelect('#optI7', 'text', 'asc');
        sortSelect('#optI5', 'text', 'asc');
        $('#dropDownDest').get(0).selectedIndex = 0;

    }); // event listener click

    $('#btnSortPrice').click(function (e) {

        sortSelect('#optI7', 'value', 'desc');
        sortSelect('#optI5', 'value', 'desc');
        $('#dropDownDest').get(0).selectedIndex = 0;

    }); // event listener click

    $('#btnSort2').click(function (e) {

        sortSelect('#optNvi', 'value', 'desc');
        sortSelect('#optGamd', 'value', 'desc');
        sortSelect('#dropDownDest2', 'text', 'asc');

    }); // event listener click

    $('#btnSortPrice2').click(function (e) {

        sortSelect('#optNvi', 'value', 'desc');
        sortSelect('#optGamd', 'value', 'desc');
        sortSelect('#dropDownDest2', 'value', 'desc');

    }); // event listener click

    $.getJSON('json.json', function (json) {
        //CPU
        $.each(json.cpu, function (key, value) {
            var option = $('<option />').val(value.price).text(value.name + " for " + value.price);
            if (value.price === "") ;
            else if (value.name.indexOf("Intel Core i7") !== -1)    { $("#optI7").append(option); }
            else if (value.name.indexOf("Intel Core i5") !== -1)    { $("#optI5").append(option); }
            else if (value.name.indexOf("Intel Core i3") !== -1)    { $("#optI3").append(option); }
            else if (value.name.indexOf("Intel Pentium") !== -1)    { $("#optP").append(option); }
            else if (value.name.indexOf("AMD Ryzen") !== -1)        { $("#optRyz").append(option); }
            else if (value.name.indexOf("AMD Threadripper") !== -1) { $("#optThr").append(option); }
            else if (value.name.indexOf("AMD FX") !== -1)           { $("#optFx").append(option); }
            else if (value.name.indexOf("AMD") !== -1)              { $("#optAmdold").append(option); }
        });
        //GPU
        $.each(json.gpu, function (key, value) {
            var option = $('<option />').val(value.price).text(value.name + " for " + value.price);
            if (value.price === "") ;
            else if (value.chipset.indexOf("GTX") !== -1)       { $("#optNvi").append(option); }
            else if (value.chipset.indexOf("Radeon") !== -1)    { $("#optGamd").append(option); }
            else { $("#dropDownDest2").append(option); }
        });
        //Motherboard
        $.each(json.motherboard, function (key, value) {
            var option = $('<option />').val(value.price).text(value.name + " for " + value.price);
            if (value.price === "");
            else if (value.formf.indexOf("ATX") !== -1)         { $("#optAtx").append(option); }
            else if (value.formf.indexOf("Mini ITX") !== -1)    { $("#optMiitx").append(option); }
            else {$("#optMatx").append(option); }
           
        });
        //Case
        $.each(json.case, function (key, value) {
            var option = $('<option />').val(value.price).text(value.name + " for " + value.price);
            if (value.price === "");
            else if (value.type.indexOf("ATX Mid Tower") !== -1)        { $("#optAtxmt").append(option); }
            else if (value.type.indexOf("MicroATX Mini Tower") !== -1)  { $("#optMatxmi").append(option); }
            else if (value.type.indexOf("MicroATX Mid Tower") !== -1)   { $("#optMatxmt").append(option); }
            else if (value.type.indexOf("Mini ITX Tower") !== -1)       { $("#optMitxt").append(option); }
        });
        //CPU Cooler
        $.each(json.cpuCooler, function (key, value) {
            var option = $('<option />').val(value.price).text(value.name + " for " + value.price);
            if (value.price === "");
            else if (value.name.indexOf("Cooler Master") !== -1)        { $("#optCm").append(option); }
            else if (value.name.indexOf("Corsair") !== -1)              { $("#optCo").append(option); }
            else if (value.name.indexOf("NZXT") !== -1)                 { $("#optNz").append(option); }
            else if (value.name.indexOf("Noctua") !== -1)               { $("#optNoc").append(option); }
            else if (value.name.indexOf("be quiet!") !== -1)            { $("#optBeq").append(option); }
            else if (value.name.indexOf("Thermaltake") !== -1)          { $("#optTher").append(option); }
            else if (value.name.indexOf("Phanteks") !== -1)             { $("#optPha").append(option); }
            else if (value.name.indexOf("Fractal Design") !== -1)       { $("#optFrd").append(option); }
            else if (value.name.indexOf("ARCTIC") !== -1)               { $("#optArc").append(option); }
            else if (value.name.indexOf("Deepcool") !== -1)             { $("#optDee").append(option); }
        });
        //HDD
        $.each(json.drives, function (key, value) {
            var option = $('<option />').val(value.price).text(value.name + " for " + value.price);
            if (value.price === "");
            else if (value.type.indexOf("RPM") !== -1 || (value.capacity.indexOf("120GB")) !== -1)   { $("#optHdd120GB").append(option); }
            else if (value.type.indexOf("RPM") !== -1 || (value.capacity.indexOf("250GB")) !== -1)  { $("#optHdd250GB").append(option); }
            else if (value.type.indexOf("RPM") !== -1 || (value.capacity.indexOf("256GB")) !== -1)  { $("#optHdd256GB").append(option); }
            else if (value.type.indexOf("RPM") !== -1 || (value.capacity.indexOf("480GB")) !== -1)  { $("#optHdd480GB").append(option); }
            else if (value.type.indexOf("RPM") !== -1 || (value.capacity.indexOf("500GB")) !== -1)  { $("#optHdd500GB").append(option); }
            else if (value.type.indexOf("RPM") !== -1 || (value.capacity.indexOf("520GB")) !== -1)  { $("#optHdd520GB").append(option); }
            else if (value.type.indexOf("RPM") !== -1 || (value.capacity.indexOf("1TB")) !== -1)    { $("#optHdd1TB").append(option); }
            else if (value.type.indexOf("RPM") !== -1 || (value.capacity.indexOf("2TB")) !== -1)    { $("#optHdd2TB").append(option); }
            else if (value.type.indexOf("RPM") !== -1 || (value.capacity.indexOf("4TB")) !== -1)    { $("#optHdd4TB").append(option); }
        });
        //SSD
        $.each(json.drives, function (key, value) {
            var option = $('<option />').val(value.price).text(value.name + " for " + value.price);
            if (value.price === "");
            else if (value.type.indexOf("SSD") !== -1 || (value.capacity.indexOf("120GB")) !== -1)  { $("#optSsd120GB").append(option); }
            else if (value.type.indexOf("SSD") !== -1 || (value.capacity.indexOf("250GB")) !== -1)  { $("#optSsd250GB").append(option); }
            else if (value.type.indexOf("SSD") !== -1 || (value.capacity.indexOf("256GB")) !== -1)  { $("#optSsd256GB").append(option); }
            else if (value.type.indexOf("SSD") !== -1 || (value.capacity.indexOf("480GB")) !== -1)  { $("#optSsd480GB").append(option); }
            else if (value.type.indexOf("SSD") !== -1 || (value.capacity.indexOf("500GB")) !== -1)  { $("#optSsd500GB").append(option); }
            else if (value.type.indexOf("SSD") !== -1 || (value.capacity.indexOf("520GB")) !== -1)  { $("#optSsd520GB").append(option); }
            else if (value.type.indexOf("SSD") !== -1 || (value.capacity.indexOf("1TB")) !== -1)    { $("#optSsd1TB").append(option); }
            else if (value.type.indexOf("SSD") !== -1 || (value.capacity.indexOf("2TB")) !== -1)    { $("#optSsd2TB").append(option); }
            else if (value.type.indexOf("SSD") !== -1 || (value.capacity.indexOf("4TB")) !== -1)    { $("#optSsd4TB").append(option); }
        });
        //RAM
        $.each(json.ram, function (key, value) {

            var option = $('<option />').val(value.price).text(value.name + " " + value.size + " for " + value.price);
            if (value.price === "");
            else if (value.modules.indexOf("1x4") !== -1)   { $("#opt1x4").append(option); }
            else if (value.modules.indexOf("2x2") !== -1)   { $("#opt2x2").append(option); }
            else if (value.modules.indexOf("3x2") !== -1)   { $("#opt3x2").append(option); }
            else if (value.modules.indexOf("1x8") !== -1)   { $("#opt1x8").append(option); }
            else if (value.modules.indexOf("2x4") !== -1)   { $("#opt2x4").append(option); }
            else if (value.modules.indexOf("4x2") !== -1)   { $("#opt4x2").append(option); }
            else if (value.modules.indexOf("3x4") !== -1)   { $("#opt3x4").append(option); }
            else if (value.modules.indexOf("6x2") !== -1)   { $("#opt6x2").append(option); }
            else if (value.modules.indexOf("1x16") !== -1)  { $("#opt1x16").append(option); }
            else if (value.modules.indexOf("2x8") !== -1)   { $("#opt2x8").append(option); }
            else if (value.modules.indexOf("4x4") !== -1)   { $("#opt4x4").append(option); }
            else if (value.modules.indexOf("3x8") !== -1)   { $("#opt3x8").append(option); }
            else if (value.modules.indexOf("6x4") !== -1)   { $("#opt6x4").append(option); }
            else if (value.modules.indexOf("1x32") !== -1)  { $("#opt1x32").append(option); }
            else if (value.modules.indexOf("2x16") !== -1)  { $("#opt2x16").append(option); }
            else if (value.modules.indexOf("4x8") !== -1)   { $("#opt4x8").append(option); }
            else if (value.modules.indexOf("8x4") !== -1)   { $("#opt8x4").append(option); }
            else if (value.modules.indexOf("3x16") !== -1)  { $("#opt3x16").append(option); }
            else if (value.modules.indexOf("1x64") !== -1)  { $("#opt1x64").append(option); }
            else if (value.modules.indexOf("2x32") !== -1)  { $("#opt2x32").append(option); }
            else if (value.modules.indexOf("4x16") !== -1)  { $("#opt4x16").append(option); }
            else if (value.modules.indexOf("8x8") !== -1)   { $("#opt8x8").append(option); }
            else if (value.modules.indexOf("3x32") !== -1)  { $("#opt3x32").append(option); }
            else if (value.modules.indexOf("8x16") !== -1)  { $("#opt8x16").append(option); }

        });

    $.each(json.ram, function (key, value) {
        var option = $('<option />').val(value.price).text(value.name + " " + value.size + " for " + value.price);
        var list = ["4x4", "1x4"]
        for (i in list);
            if (value.modules.indexOf(i) !== -1);
                $("#optn" + list[i]).append(option)
		});
        //Power Supply (PSU)
        $.each(json.psu, function (key, value) {
            var option = $('<option />').val(value.price).text(value.name + " " + value.watts + " for " + value.price);
            if (value.price === "");
            else if (value.efficiency.indexOf("80+ Titanium") !== -1)   { $("#optTit").append(option); }
            else if (value.efficiency.indexOf("80+ Platinum") !== -1)   { $("#optPla").append(option); }
            else if (value.efficiency.indexOf("80+ Gold") !== -1)       { $("#optGol").append(option); }
            else if (value.efficiency.indexOf("80+ Silver") !== -1)     { $("#optSil").append(option); }
            else if (value.efficiency.indexOf("80+ Bronze") !== -1)     { $("#optBro").append(option); }
            else if (value.efficiency.indexOf("80+") !== -1)            { $("#opt80").append(option); }

        });

        $('#dropDownDest').on('change', function () { updatePrice();} );
        $('#dropDownDest2').on('change', function () { updatePrice(); });
        $('#dropDownDest3').on('change', function () { updatePrice(); });
        $('#dropDownDest4').on('change', function () { updatePrice(); });
        $('#dropDownDest5').on('change', function () { updatePrice(); });
        $('#dropDownDest6').on('change', function () { updatePrice(); });
        $('#dropDownDest7').on('change', function () { updatePrice(); });
        $('#dropDownDest8').on('change', function () { updatePrice(); });
        $('#dropDownDest9').on('change', function () { updatePrice(); });


        var updatePrice = function () {
            var pricecpu = parseFloat($('#dropDownDest option:selected').val().substring(1));
            var pricegpu = parseFloat($('#dropDownDest2 option:selected').val().substring(1));
            var pricecase = parseFloat($('#dropDownDest4 option:selected').val().substring(1));
            var pricecpucooler = parseFloat($('#dropDownDest5 option:selected').val().substring(1));
            var pricehdd = parseFloat($('#dropDownDest6 option:selected').val().substring(1));
            var pricessd = parseFloat($('#dropDownDest7 option:selected').val().substring(1));
            var pricemotherboard = parseFloat($('#dropDownDest3 option:selected').val().substring(1));
            var priceram = parseFloat($('#dropDownDest8 option:selected').val().substring(1));
            var pricepsu = parseFloat($('#dropDownDest7 option:selected').val().substring(1));
            Price = pricecpu + pricegpu + pricemotherboard + pricecase + pricecpucooler + pricehdd + pricessd + priceram + pricepsu;
            var Pricestring = String.fromCharCode('163') + Price;
            $('#drop1Label').text(Pricestring);

        };
    });





    var sortSelect = function (select, attr, order) {
        if (attr === 'text') {
            if (order === 'asc') {
                $(select).html($(select).children('option').sort(function (x, y) {
                    return $(x).text().toUpperCase() < $(y).text().toUpperCase() ? -1 : 1;
                }));
                e.preventDefault();
            }// end asc
            if (order === 'desc') {
                $(select).html($(select).children('option').sort(function (y, x) {
                    return $(x).text().toUpperCase() < $(y).text().toUpperCase() ? -1 : 1;
                }));
                e.preventDefault();
            }// end desc
        }
        if (attr === 'value') {
            if (order === 'asc') {
                $(select).html($(select).children('option').sort(function (x, y) {
                    return parseFloat($(x).val().substring(1)) < parseFloat($(y).val().substring(1)) ? -1 : 1;
                }));
                e.preventDefault();
            }// end asc
            if (order === 'desc') {
                $(select).html($(select).children('option').sort(function (y, x) {
                    return parseFloat($(x).val().substring(1)) < parseFloat($(y).val().substring(1)) ? -1 : 1;
                }));
                e.preventDefault();
            }// end desc
        }
    };
});