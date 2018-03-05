$(document).ready(function () {
    var Price = 0;

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
            else if (value.type.indexOf("Mini ITX Tower") !== -1) { $("#optMitxt").append(option); }
            
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
            var option = $('<option />').val(value.price).text(value.name + " " + value.capacity + " for " + value.price);
            if (value.price === "");
            else if (value.type.indexOf("RPM") !== -1 && (value.capacity.indexOf("120GB")) !== -1)   { $("#optHdd120GB").append(option); }
            else if (value.type.indexOf("RPM") !== -1 && (value.capacity.indexOf("250GB")) !== -1)  { $("#optHdd250GB").append(option); }
            else if (value.type.indexOf("RPM") !== -1 && (value.capacity.indexOf("256GB")) !== -1)  { $("#optHdd256GB").append(option); }
            else if (value.type.indexOf("RPM") !== -1 && (value.capacity.indexOf("480GB")) !== -1)  { $("#optHdd480GB").append(option); }
            else if (value.type.indexOf("RPM") !== -1 && (value.capacity.indexOf("500GB")) !== -1)  { $("#optHdd500GB").append(option); }
            else if (value.type.indexOf("RPM") !== -1 && (value.capacity.indexOf("520GB")) !== -1)  { $("#optHdd520GB").append(option); }
            else if (value.type.indexOf("RPM") !== -1 && (value.capacity.indexOf("1TB")) !== -1)    { $("#optHdd1TB").append(option); }
            else if (value.type.indexOf("RPM") !== -1 && (value.capacity.indexOf("2TB")) !== -1)    { $("#optHdd2TB").append(option); }
            else if (value.type.indexOf("RPM") !== -1 && (value.capacity.indexOf("4TB")) !== -1)    { $("#optHdd4TB").append(option); }
        });
        //SSD
        $.each(json.drives, function (key, value) {
            var option = $('<option />').val(value.price).text(value.name + " " + value.capacity + " for " + value.price);
            if (value.price === "");
            else if (value.type.indexOf("SSD") !== -1 && (value.capacity.indexOf("120GB")) !== -1)  { $("#optSsd120GB").append(option); }
            else if (value.type.indexOf("SSD") !== -1 && (value.capacity.indexOf("250GB")) !== -1)  { $("#optSsd250GB").append(option); }
            else if (value.type.indexOf("SSD") !== -1 && (value.capacity.indexOf("256GB")) !== -1)  { $("#optSsd256GB").append(option); }
            else if (value.type.indexOf("SSD") !== -1 && (value.capacity.indexOf("480GB")) !== -1)  { $("#optSsd480GB").append(option); }
            else if (value.type.indexOf("SSD") !== -1 && (value.capacity.indexOf("500GB")) !== -1)  { $("#optSsd500GB").append(option); }
            else if (value.type.indexOf("SSD") !== -1 && (value.capacity.indexOf("520GB")) !== -1)  { $("#optSsd520GB").append(option); }
            else if (value.type.indexOf("SSD") !== -1 && (value.capacity.indexOf("1TB")) !== -1)    { $("#optSsd1TB").append(option); }
            else if (value.type.indexOf("SSD") !== -1 && (value.capacity.indexOf("2TB")) !== -1)    { $("#optSsd2TB").append(option); }
            else if (value.type.indexOf("SSD") !== -1 && (value.capacity.indexOf("4TB")) !== -1)    { $("#optSsd4TB").append(option); }
        });
        //RAM
        $.each(json.ram, function (key, value) {
            list = ["1x4", "2x2", "3x2", "1x8", "2x4",]
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


        function updatePrice () {
            var pricecpu = parseFloat($('#dropDownDest option:selected').val().substring(1));
            var pricegpu = parseFloat($('#dropDownDest2 option:selected').val().substring(1));
            var pricecase = parseFloat($('#dropDownDest4 option:selected').val().substring(1));
            var pricecpucooler = parseFloat($('#dropDownDest5 option:selected').val().substring(1));
            var pricehdd = parseFloat($('#dropDownDest6 option:selected').val().substring(1));
            var pricessd = parseFloat($('#dropDownDest7 option:selected').val().substring(1));
            var pricemotherboard = parseFloat($('#dropDownDest3 option:selected').val().substring(1));
            var priceram = parseFloat($('#dropDownDest8 option:selected').val().substring(1));
            var pricepsu = parseFloat($('#dropDownDest9 option:selected').val().substring(1));
            Price = pricecpu + pricegpu + pricemotherboard + pricecase + pricecpucooler + pricehdd + pricessd + priceram + pricepsu;
            p = parseFloat((Price).toFixed(2));
            pi = parseFloat((p * 1.2).toFixed(2));
            var PriceIstring = 'Valuation Price : ' + String.fromCharCode('163') + pi;
            var Pricestring = 'Total Base Price : ' + String.fromCharCode('163') + p;
            $('#drop1Label').text(Pricestring);
            $('#drop2Label').text(PriceIstring);


            var deccpu = $('#dropDownDest option:selected').text().substring(0);
            var decgpu = $('#dropDownDest2 option:selected').text().substring(0);
            var deccase = $('#dropDownDest4 option:selected').text().substring(0);
            var deccpucooler = $('#dropDownDest5 option:selected').text().substring(0);
            var dechdd = $('#dropDownDest6 option:selected').text().substring(0);
            var decssd = $('#dropDownDest7 option:selected').text().substring(0);
            var decmotherboard = $('#dropDownDest3 option:selected').text().substring(0);
            var decram = $('#dropDownDest8 option:selected').text().substring(0);
            var decpsu = $('#dropDownDest9 option:selected').text().substring(0);

            var decCpuS = deccpu.split(" for ")[0];
            var decGpuS = decgpu.split(" for ")[0];
            var decCaseS = deccase.split(" for ")[0];
            var decCpuCoolerS = deccpucooler.split(" for ")[0];
            var decHddS = dechdd.split(" for ")[0];
            var decSsdS = decssd.split(" for ")[0];
            var decMotherboardS = decmotherboard.split(" for ")[0];
            var decRamS = decram.split(" for ")[0];
            var decPsuS = decpsu.split(" for ")[0];

            return [decCpuS];
            console.log(updatePrice(decCpuS))
        };
            // Module 4 - PDF
            function initDownloadPDF () {
                $('.download-pdf').click(function () {
                    console.log(updatePrice(decCpuS))
                    p = updatePrice();
                    var n = new Date()
                    var name = prompt('What is your name?');
                    var house = prompt('What is your house name / number?');
                    var street = prompt('What is your street name?');
                    var city = prompt('What city do you live in or near?');
                    var postcode = prompt('What is your postcode?');

                    var doc = new jsPDF({
                        orientation: 'portrait',
                        unit: 'cm',
                        format: [21, 29]
                    });

                    doc.rect(1, 6, 19, 11);                                                     //Table Body
                    doc.rect(1, 6, 19, 2);                                                      //Header
                    doc.rect(1, 8, 19, 1);                                                      //Component 1 = CPU
                    doc.rect(1, 9, 19, 1);                                                      //Component 2 = GPU
                    doc.rect(1, 10, 19, 1);                                                     //Component 3 = RAM
                    doc.rect(1, 11, 19, 1);                                                     //Component 4 = Motherboard
                    doc.rect(1, 12, 19, 1);                                                     //Component 5 = CPU Cooler
                    doc.rect(1, 13, 19, 1);                                                     //Component 6 = SSD
                    doc.rect(1, 14, 19, 1);                                                     //Component 7 = HDD
                    doc.rect(1, 15, 19, 1);                                                     //Component 8 = PSU
                    doc.rect(1, 16, 19, 1);                                                     //Component 9 = Case
                    doc.rect(15, 17, 5, 2);                                                     //Total Base Price

                    doc.setFontSize(20);                                                        //Font size 20
                    doc.text('Parts List', 7, 7);                                               //Price List Header
                    doc.rect(15, 6, 5, 15);                                                     //Price List Rectangle
                    doc.text('Price List', 16, 7);                                              //Price List Header

                    doc.setFontSize(10);
                    doc.text('CPU : ' + p.decCpuS, 2, 8.5);                                       //Component 1 = CPU
                    doc.text('GPU : ' + p.decGpuS, 2, 9.5);                                       //Component 2 = GPU
                    doc.text('RAM : ' + p.decRamS, 2, 10.5);                                      //Component 3 = RAM
                    doc.text('Motherboard : ' + decMotherboardS, 2, 11.5);                      //Component 4 = Motherboard
                    doc.text('CPU Cooler : ' + decCpuCoolerS, 2, 12.5);                         //Component 5 = CPU Cooler
                    doc.text('SSD : ' + decSsdS, 2, 13.5);                                      //Component 6 = SSD
                    doc.text('HDD : ' + decHddS, 2, 14.5);                                      //Component 7 = HDD
                    doc.text('PSU : ' + decPsuS, 2, 15.5);                                      //Component 8 = PSU
                    doc.text('Case : ' + decCaseS, 2, 16.5);                                    //Component 9 = Case


                    doc.setFontSize(12);
                    doc.text(String.fromCharCode('163') + pricecpu, 16.5, 8.5);                 //CPU Price
                    doc.text(String.fromCharCode('163') + pricegpu, 16.5, 9.5);                 //GPU Price
                    doc.text(String.fromCharCode('163') + priceram, 16.5, 10.5);                //RAM Price
                    doc.text(String.fromCharCode('163') + pricemotherboard, 16.5, 11.5);        //Motherboard Price
                    doc.text(String.fromCharCode('163') + pricecpucooler, 16.5, 12.5);          //CPU Cooler Price
                    doc.text(String.fromCharCode('163') + pricessd, 16.5, 13.5);                //SSD Price
                    doc.text(String.fromCharCode('163') + pricehdd, 16.5, 14.5);                //HDD Price
                    doc.text(String.fromCharCode('163') + pricepsu, 16.5, 15.5);                //PSU Price
                    doc.text(String.fromCharCode('163') + pricecase, 16.5, 16.5);               //Case Price
                    doc.text('Total Base Price', 15.5, 17.9);                                   //Total Base Price
                    doc.text(String.fromCharCode('163') + p, 15.5, 18.5);
                    doc.text('Total Evaluation Price', 15.5, 19.9);                             //Total Base Price + Evaluation
                    doc.text(String.fromCharCode('163') + pi, 15.5, 20.5);

                    doc.text(name, 2, 3);
                    doc.text(house, 2, 3.5);
                    doc.text(street, 2, 4);
                    doc.text(city, 2, 4.5);
                    doc.text(postcode, 2, 5);

                    doc.save(n + 'test.pdf');

                });
            };
            initDownloadPDF();
        
    });

});

