/**

 *  Authors: Kruthika Rathinavel
 *  Version: 1.2.1
 *  Email: kruthika@vt.edu
 *  Created: "2014-10-13 18:45:40"
 *  Updated: "2015-02-13 15:06:41"


 * Copyright © 2014 by Virginia Polytechnic Institute and State University
 * All rights reserved

 * Virginia Polytechnic Institute and State University (Virginia Tech) owns the copyright for the BEMOSS software and its
 * associated documentation ("Software") and retains rights to grant research rights under patents related to
 * the BEMOSS software to other academic institutions or non-profit research institutions.
 * You should carefully read the following terms and conditions before using this software.
 * Your use of this Software indicates your acceptance of this license agreement and all terms and conditions.

 * You are hereby licensed to use the Software for Non-Commercial Purpose only.  Non-Commercial Purpose means the
 * use of the Software solely for research.  Non-Commercial Purpose excludes, without limitation, any use of
 * the Software, as part of, or in any way in connection with a product or service which is sold, offered for sale,
 * licensed, leased, loaned, or rented.  Permission to use, copy, modify, and distribute this compilation
 * for Non-Commercial Purpose to other academic institutions or non-profit research institutions is hereby granted
 * without fee, subject to the following terms of this license.

 * Commercial Use: If you desire to use the software for profit-making or commercial purposes,
 * you agree to negotiate in good faith a license with Virginia Tech prior to such profit-making or commercial use.
 * Virginia Tech shall have no obligation to grant such license to you, and may grant exclusive or non-exclusive
 * licenses to others. You may contact the following by email to discuss commercial use:: vtippatents@vtip.org

 * Limitation of Liability: IN NO EVENT WILL VIRGINIA TECH, OR ANY OTHER PARTY WHO MAY MODIFY AND/OR REDISTRIBUTE
 * THE PROGRAM AS PERMITTED ABOVE, BE LIABLE TO YOU FOR DAMAGES, INCLUDING ANY GENERAL, SPECIAL, INCIDENTAL OR
 * CONSEQUENTIAL DAMAGES ARISING OUT OF THE USE OR INABILITY TO USE THE PROGRAM (INCLUDING BUT NOT LIMITED TO
 * LOSS OF DATA OR DATA BEING RENDERED INACCURATE OR LOSSES SUSTAINED BY YOU OR THIRD PARTIES OR A FAILURE
 * OF THE PROGRAM TO OPERATE WITH ANY OTHER PROGRAMS), EVEN IF VIRGINIA TECH OR OTHER PARTY HAS BEEN ADVISED
 * OF THE POSSIBILITY OF SUCH DAMAGES.

 * For full terms and conditions, please visit https://bitbucket.org/bemoss/bemoss_os.

 * Address all correspondence regarding this license to Virginia Tech's electronic mail address:: vtippatents@vtip.org

**/


/**
 * @author kruthika
 * Date: 8/11/14.
 */

/*
  jQuery Document ready
*/

var lt_map = { 'monday' : _data['0'],
                'tuesday' : _data['1'],
                'wednesday' : _data['2'],
                'thursday' : _data['3'],
                'friday' : _data['4'],
                'saturday' : _data['5'],
                'sunday' : _data['6']
                };

var lt_map_modified = { 'monday' : _data['0'],
                'tuesday' : _data['1'],
                'wednesday' : _data['2'],
                'thursday' : _data['3'],
                'friday' : _data['4'],
                'saturday' : _data['5'],
                'sunday' : _data['6']
                };

$(onStart); //short-hand for $(document).ready(onStart);
function onStart($) {
    //alert("on start");
    //table_id:value from the server
    var pl_schedule = [["monday_schedule",_data['0']],
                        ["tuesday_schedule",_data['1']],
                        ["wednesday_schedule",_data['2']],
                        ["thursday_schedule",_data['3']],
                        ["friday_schedule",_data['4']],
                        ["saturday_schedule",_data['5']],
                        ["sunday_schedule",_data['6']]];
                        //["all_schedule",_data['7']]];

    for (var j = 0; j < 7; j++) {
        //alert(th_schedule[j]);
        //var table_id = "\"" + th_schedule[j][0] + "\"";
        var table_id = pl_schedule[j][0];
        //alert(table_id);
        var table = document.getElementById(table_id);
        //alert(table.rows.length);
    	var noOfRows = table.rows.length;

    	var current_data = pl_schedule[j][1];
    	var no_of_periods = current_data.length;
    	console.log("no of periods"+no_of_periods);


    	for (var i = 0; i < no_of_periods; i++) {

    		noOfRows = document.getElementById(table_id).rows.length;

    		var row = table.insertRow(noOfRows);
    		var cell1 = row.insertCell(0);
    		var cell2 = row.insertCell(1);
    		var cell3 = row.insertCell(2);
    		var cell4 = row.insertCell(3);
    		var cell5 = row.insertCell(4);
    		//var cell6 = row.insertCell(5);

    		var time = current_data[i][0];
    		/*if (time/60 < 12) {
    			if (time%60 < 10) {
    				time = '0' + Math.floor(time/60) + ':0' + time%60;
    			} else {
    				time = '0' + Math.floor(time/60) + ':' + time%60;
    			}
    		} else {
    			if (time%60 < 10) {
    				time = Math.floor(time/60) + ':0' + time%60;
    			} else {
    				time = Math.floor(time/60) + ':' + time%60;
    			}
    		}*/

            var minutes = time % 60;
            var hours = Math.floor(time / 60);

            minutes = (minutes < 10 ? '0' : '') + minutes;
            hours = (hours < 10 ? '0' : '') + hours;

            time = hours + ':' + minutes;

    		cell1.innerHTML = '<div style="margin-top:10px; margin-bottom:10px;">' + noOfRows + '</div>';
    		cell2.innerHTML = '<td><input  style="margin-top:10px; margin-bottom: 20px;" type="text" id="nickname" name="nickname" value="Period'+ noOfRows +'"/></td>';


    		var c3content=document.createElement("input");
    		c3content.setAttribute("type","text");
    		c3content.setAttribute("name","tp" + "_" + table_id + "_" + noOfRows);
    		c3content.setAttribute("id","tp" + "_" + table_id + "_" + noOfRows);
    		c3content.setAttribute("class","hasDatePicker");
    		c3content.setAttribute("value",time);

            /*<button class="btn btn-sm btn-default" type="button" id="off_monday_schedule_1"> OFF </button>
            <button class="btn btn-sm btn-success" type="button" id="on_monday_schedule_1"> ON </button>*/

    	    cell3.appendChild(c3content);
    	    //temp_value = current_data[i][1];
            if (current_data[i][1] == 0) {
                //var cell4_add_1 = '<button class="btn btn-sm btn-success" type="button" id="off_';
                //var cell4_add_2 = '"> OFF </button>  <button class="btn btn-sm btn-default" type = "button" id="on_';
                //cell4.innerHTML = cell4_add_1 + table_id + "_" + noOfRows + cell4_add_2 + table_id + '_' + noOfRows + '"> ON </button>';
                var button_off = '<button class="btn btn-sm btn-success on_off_left" type="button" id="off_' + table_id + '_' + noOfRows +'"> OFF </button>';
                var slider = '<div class="slider" id="dim_'+ table_id + '_' + noOfRows + '"></div>';
                var button_on = '<button class="btn btn-sm btn-default on_off_right" type="button" id="on_' + table_id + '_' + noOfRows +'"> ON </button>';
                //var color_box = '<input type="text" disabled="" style="width:30px;background-color:' + getRandomColor() + ';margin-top:20px;">';
                var color_box = '<input type="text" disabled="" style="width:30px;background-color:' + getRandomColor() + ';margin-top:20px;">';
                cell4.innerHTML = '<span id="on_off_div">' + button_off + slider + button_on  + '</div>';
            } else {
                //var cell4_add_1 = '<button class="btn btn-sm btn-default" type="button" id="off_';
                //var cell4_add_2 = '"> OFF </button> <button class="btn btn-sm btn-success" type = "button" id="on_';
                //cell4.innerHTML = cell4_add_1 + table_id + "_" + noOfRows + cell4_add_2 + table_id + '_' + noOfRows + '"> ON </button>';
                var button_off = '<button class="btn btn-sm btn-default on_off_left" type="button" id="off_' + table_id + '_' + noOfRows +'"> OFF </button>';
                var slider = '<div class="slider" id="dim_'+ table_id + '_' + noOfRows + '"></div>';
                var button_on = '<button class="btn btn-sm btn-success on_off_right" type="button" id="on_' + table_id + '_' + noOfRows +'"> ON </button>';
                var color_box = '<input type="text" disabled="" style="width:30px;background-color:' + getRandomColor() + ';margin-top:20px;">';
                cell4.innerHTML = '<span id="on_off_div">' + button_off + slider + button_on  + '</span';
            }
            cell5.innerHTML = '<input type="text" disabled="" style="width:30px;background-color:#fffafa;margin-top:20px;">';
    		$('.hasDatePicker').timepicker();
            //$("#dim_"+ table_id + "_" + noOfRows ).slider({
            /*$(".slider" ).slider({
		              		  value: current_data,
		              	      orientation: "horizontal",
		              	      range: "min",
		              	      animate: true,
		              	      min: 0,
		              	      max: 100
		                  });*/
             //$("#dim_"+ table_id + "_" + noOfRows ).slider("float");

    }

	}
}
function getRandomColor() {
        var letters = '0123456789ABCDEF'.split('');
        var color = '#';
        for (var i = 0; i < 6; i++ ) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

	$('.add_new_period').click(function(evt) {
		evt.preventDefault();
		var parent = this.parentNode.parentNode.parentNode.id;
		//alert(parent);
		var req_table = parent.split('_');
		req_table = req_table[0] + '_schedule_' + req_table[1];
		var table = document.getElementById(req_table);
		noOfRows = document.getElementById(req_table).rows.length;
		var row = table.insertRow(noOfRows);
		var cell1 = row.insertCell(0);
		var cell2 = row.insertCell(1);
		var cell3 = row.insertCell(2);
		var cell4 = row.insertCell(3);
		var cell5 = row.insertCell(4);
		var cell6 = row.insertCell(5);

		cell1.innerHTML = noOfRows;
		cell2.innerHTML = '<td><input type="text" id="nickname" name="nickname" value="Period'+ noOfRows +'"/></td>';


		var c3content=document.createElement("input");
		c3content.setAttribute("type","text");
		c3content.setAttribute("name","tp" + "_" + table.id + "_" + noOfRows);
		c3content.setAttribute("id","tp" + "_" + table.id + "_" + noOfRows);
		c3content.setAttribute("class","hasDatePicker");
		c3content.setAttribute("value",time);

	    cell3.appendChild(c3content);
	    //temp_value = current_data[i][1];
		cell4.innerHTML = '<span class="h4" id="temp_' + table.id + '_' + noOfRows + '">' + '70' + '</span>  <button class="btn btn-sm btn-primary" type="button" id="reduce' +  "_" + table.id + "_" + noOfRows + '"> - </button> '+
		'<button class="btn btn-sm btn-warning" type = "button" id="increase_' + table.id + '_' + noOfRows + '"> + </button>';

		$('.hasDatePicker').timepicker();

		$('#' + 'reduce_' + table.id + '_' + noOfRows).click(function() {
			temp_temp = this.id.split("_");
			temp_id = "temp_"+temp_temp[1]+"_"+temp_temp[2]+"_"+temp_temp[3]+"_"+temp_temp[4];
			temp_value = $("#"+ temp_id).text();
			$("#"+ temp_id).text(parseInt(temp_value)-1);
		});

		$('#' + 'increase_' + table.id + '_' + noOfRows).click(function() {
			temp_temp = this.id.split("_");
			temp_id = "temp_"+temp_temp[1]+"_"+temp_temp[2]+"_"+temp_temp[3]+"_"+temp_temp[4];
			temp_value = $("#"+ temp_id).text();
			$("#"+ temp_id).text(parseInt(temp_value)+1);
		});

	});



$( document ).ready(function() {

    $(".slider").each(function() {
        var div_id = this.id.split('_');
        console.log(div_id);
        var first_id = div_id[1];
        var second_id = div_id[3];
        //console.log(lt_map_modified);
        console.log(first_id + second_id);
        req_row = lt_map[first_id][second_id-1][1];
        console.log(req_row);
        $(this).empty().slider({
            value: parseInt(req_row),
            orientation: "horizontal",
            range: "min",
            animate: true,
            min: 0,
            max: 100,
            slide: function( event, ui ) {
                    lt_map_modified[first_id][second_id-1][1] = ui.value;
                    //console.log(lt_map_modified);
			       }
        });
        $(this).slider("float");
        $(this).slider("pips" , {
            rest: false
        });

    });

	$.csrftoken();

	var sch_tbl_heat = ["monday_schedule_heat",
	               "tuesday_schedule_heat",
	               "wednesday_schedule_heat",
                   "thursday_schedule_heat",
	               "friday_schedule_heat",
	               "saturday_schedule_heat",
	               "sunday_schedule_heat",
	               ];

	var sch_tbl_cool = ["monday_schedule_cool",
	                    "tuesday_schedule_cool",
	                    "wednesday_schedule_cool",
	                    "thursday_schedule_cool",
	                    "friday_schedule_cool",
	                    "saturday_schedule_cool",
	                    "sunday_schedule_cool"];

	function schedule_updated(data_sent){
		var setTimeOut_schedule = setTimeout(function()
		{
			$.ajax({
			  url : '/update_schedule/',
			  type: 'POST',
			  data : data_sent,
			  //dataType : 'text',
			  success : function(data) {
				update_status = data.status;
			  	if (update_status=="success"){
			  		stopTimer('setTimeOut_schedule');
				  	$('.bottom-right').notify({
				  	    message: { text: 'The changes you made at '+update_time+" have now been updated in the device"},
				  	    type: 'blackgloss',
                        fadeOut: { enabled: true, delay: 5000 }
				  	  }).show();
			  	} else {
				  	$('.bottom-right').notify({
				  	    message: { text: 'The changes you made at '+update_time+" could not be updated in the device. Please try again!"},
				  	    type: 'blackgloss',
                        fadeOut: { enabled: true, delay: 5000 }
				  	  }).show();
			  	}
			  },
			  error: function(data) {

			  }
			 });
		},3000);
	}


	function stopTimer(setTimeOut_schedule) {
		clearInterval(setTimeOut_schedule);
	}

	function get_update_sch_values() {
		var sch_heat = {zero:[],one:[],two:[],three:[],four:[],five:[],six:[]};
		var sch_cool = {zero:[],one:[],two:[],three:[],four:[],five:[],six:[]};

		for (var j = 0; j < 7; j++) {

	        var table_id = sch_tbl_heat[j];
	        var table = document.getElementById(table_id);
	        var noOfRows = table.rows.length;

	    	for (var i = 1; i < noOfRows; i++) {
	    		tp_val =  "tp_"  + table_id + '_' + i;
	    		tp_val = document.getElementById(tp_val).value;
	    		tp_val = tp_val.split(":");
	    		tp_val = ( parseInt(tp_val[0])*60)+ parseInt(tp_val[1]);
	    		temp_val = "temp_" + table_id + '_' + i;
	    		temp_val = parseInt(document.getElementById(temp_val).innerHTML);

	    		switch (table_id) {
	    		  case 'monday_schedule_heat':
	    			  sch_heat.zero.push(tp_val);
	    			  sch_heat.zero.push(temp_val);
	    			  break;
	    		  case 'tuesday_schedule_heat':
	    			  sch_heat.one.push(tp_val);
	    			  sch_heat.one.push(temp_val);
	    			  break;
	    		  case 'wednesday_schedule_heat':
	    			  sch_heat.two.push(tp_val);
	    			  sch_heat.two.push(temp_val);
	    			  break;
	    		  case 'thursday_schedule_heat':
	    			  sch_heat.three.push(tp_val);
	    			  sch_heat.three.push(temp_val);
	    			  break;
	    		  case 'friday_schedule_heat':
	    			  sch_heat.four.push(tp_val);
	    			  sch_heat.four.push(temp_val);
	    			  break;
	    		  case 'saturday_schedule_heat':
	    			  sch_heat.five.push(tp_val);
	    			  sch_heat.five.push(temp_val);
	    			  break;
	    		  case 'sunday_schedule_heat':
	    			  sch_heat.six.push(tp_val);
	    			  sch_heat.six.push(temp_val);
	    			  break;
	    		}
	    	}

		}

		//sch_heat = {'\'0\':[' sch_heat.zero.toString() + '],\'1\':[' + sch_heat.one.toString() + '],\'2\':[' + sch_heat.two.toString() + '],\'3\':[' + sch_heat.three.toString() + '],\'4\':[' + sch_heat.four.toString() + '],\'5\':[' + sch_heat.five.toString() + '],\'6\':[' + sch_heat.six.toString()+']'};
		sch_heat = {'0':sch_heat.zero,'1':sch_heat.one,'2':sch_heat.two,'3':sch_heat.three,'4':sch_heat.four,'5':sch_heat.five,'6':sch_heat.six};

		for (var j = 0; j < 7; j++) {

	        var table_id = sch_tbl_cool[j];
	        var table = document.getElementById(table_id);
	        var noOfRows = table.rows.length;

	    	for (var i = 1; i < noOfRows; i++) {
	    		tp_val =  "tp_"  + table_id + '_' + i;
	    		tp_val = document.getElementById(tp_val).value;
	    		tp_val = tp_val.split(":");
	    		tp_val = ( parseInt(tp_val[0])*60)+ parseInt(tp_val[1]);
	    		temp_val = "temp_" + table_id + '_' + i;
	    		temp_val = parseInt(document.getElementById(temp_val).innerHTML);

	    		switch (table_id) {
	    		  case "monday_schedule_cool":
	    			  sch_cool.zero.push(tp_val);
	    			  sch_cool.zero.push(temp_val);
	    			  break;
	    		  case "tuesday_schedule_cool":
	    			  sch_cool.one.push(tp_val);
	    			  sch_cool.one.push(temp_val);
	    			  break;
	    		  case "wednesday_schedule_cool":
	    			  sch_cool.two.push(tp_val);
	    			  sch_cool.two.push(temp_val);
	    			  break;
	    		  case "thursday_schedule_cool":
	    			  sch_cool.three.push(tp_val);
	    			  sch_cool.three.push(temp_val);
	    			  break;
	    		  case "friday_schedule_cool":
	    			  sch_cool.four.push(tp_val);
	    			  sch_cool.four.push(temp_val);
	    			  break;
	    		  case "saturday_schedule_cool":
	    			  sch_cool.five.push(tp_val);
	    			  sch_cool.five.push(temp_val);
	    			  break;
	    		  case "sunday_schedule_cool":
	    			  sch_cool.six.push(tp_val);
	    			  sch_cool.six.push(temp_val);
	    			  break;
	    		}
	    	}

		}
		//sch_cool = {'\'0\':[' + sch_cool.zero.toString() + '],\'1\':[' + sch_cool.one.toString() + '],\'2\':[' + sch_cool.two.toString() + '],\'3\':[' + sch_cool.three.toString() + '],\'4\':[' + sch_cool.four.toString() + '],\'5\':[' + sch_cool.five.toString() + '],\'6\':[' + sch_cool.six.toString()+']'};
		sch_cool = {'0':sch_cool.zero,'1':sch_cool.one,'2':sch_cool.two,'3':sch_cool.three,'4':sch_cool.four,'5':sch_cool.five,'6':sch_cool.six};
		//sch_val = '{\'heat\':{'+ sch_heat + '},\'cool\':{' + sch_cool + '}}';
		sch_val = {'heat': sch_heat ,'cool': sch_cool,'update_number':'to_be_added','device_info': device_info };
		//sch_val = {'heat': {'0':sch_heat.zero,'1':sch_heat.one,'2':sch_heat.two,'3':sch_heat.three,'4':sch_heat.four,'5':sch_heat.five,'6':sch_heat.six} ,'cool': {'0':sch_cool.zero,'1':sch_cool.one,'2':sch_cool.two,'3':sch_cool.three,'4':sch_cool.four,'5':sch_cool.five,'6':sch_cool.six}};
		return sch_val;
	}

	$( "#submit_new_schedule" ).click(function(evt) {
		evt.preventDefault();
		update_time = new Date();
		update_time = update_time.toLocaleTimeString();
		//alert(update_time);
		values = get_update_sch_values();
		console.log(values);
	    var jsonText = JSON.stringify(values);
	    //alert(jsonText);
		$.ajax({
			  url : '/submit_schedule/',
			  type: 'POST',
			  data: jsonText,
			  contentType: "application/json; charset=utf-8",
			  dataType: 'json',
			  success : function(data) {
				schedule_update = data.update_number;
				schedule_updated(schedule_update);
			  	//alert(data);
			  	console.log(data.heat);
			  	$('.bottom-right').notify({
			  	    message: { text: 'Your thermostat schedule will be updated in BEMOSS shortly.' },
			  	    type: 'blackgloss',
                    fadeOut: { enabled: true, delay: 5000 }
			  	  }).show();
			  },
			  error: function(data) {
				  $('.bottom-right').notify({
				  	    message: { text: 'The schedule was not successful. Try again later.' },
				  	    type: 'blackgloss',
                      fadeOut: { enabled: true, delay: 5000 }
				  	}).show();
			  }
			 });
	});

});