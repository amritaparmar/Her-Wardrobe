/*** Navigation Menu  ***/
$(document).ready(function () {
    $(".toggle_menu").click(function () {
        $(".mobile_menu .navigation_menu").slideToggle();
        $(".dropbtn").css("display", "none");
    });
});
$(".drop_icon").on("click", function () {
    $(this).siblings("ul").slideToggle();
    $(this).toggleClass('open');
    $(this).parent(".navigation_menu li").siblings().children("ul").hide();
    $(this).parents('.navigation_menu li').siblings().children('span').removeClass('open');
    $(this).siblings('ul').child.ren('li').children('ul').hide();
    $(this).siblings('ul').children('li').children('span').removeClass('open');
});
/*** End Navigation Menu ***/
/***  Calendar Here  ***/
$(document).ready(function () {
    $('#calendar').fullCalendar({
        header: {
            left: 'prev,next today',
            center: 'title',
            right: 'month,agendaWeek,agendaDay'
        },
        defaultDate: '2018-03-12',
        navLinks: true, // can click day/week names to navigate views
        selectable: true,
        selectHelper: true,
        select: function (start, end) {
            var title = prompt('Event Title:');
            var eventData;
            if (title) {
                eventData = {
                    title: title,
                    start: start,
                    end: end
                };
                $('#calendar').fullCalendar('renderEvent', eventData, true); // stick? = true
            }
            $('#calendar').fullCalendar('unselect');
        },
        editable: true,
        eventLimit: true, // allow "more" link when too many events
        events: [
            {
                title: 'All Day Event',
                start: '2018-03-01'
            },
            {
                title: 'Long Event',
                start: '2018-03-07',
                end: '2018-03-10'
            },
            {
                id: 999,
                title: 'Repeating Event',
                start: '2018-03-09T16:00:00'
            },
            {
                id: 999,
                title: 'Repeating Event',
                start: '2018-03-16T16:00:00'
            },
            {
                title: 'Conference',
                start: '2018-03-11',
                end: '2018-03-13'
            },
            {
                title: 'Meeting',
                start: '2018-03-12T10:30:00',
                end: '2018-03-12T12:30:00'
            },
            {
                title: 'Lunch',
                start: '2018-03-12T12:00:00'
            },
            {
                title: 'Meeting',
                start: '2018-03-12T14:30:00'
            },
            {
                title: 'Happy Hour',
                start: '2018-03-12T17:30:00'
            },
            {
                title: 'Dinner',
                start: '2018-03-12T20:00:00'
            },
            {
                title: 'Birthday Party',
                start: '2018-03-13T07:00:00'
            },
            {
                title: 'Click for Google',
                url: 'http://google.com/',
                start: '2018-03-28'
            }
        ]
    });
});
/** End Calendar  **/
/** checkbox js start**/
$('#checkAll').click(function () {
    $(':checkbox.checkItem').prop('checked', this.checked);
});
/** checkbox js end**/
/***datepicker js start***/
$(function () {
    var dateFormat = "mm/dd/yy",
            from = $("#from")
            .datepicker({
                defaultDate: "+1w",
                changeMonth: true,
                numberOfMonths: 1
            })
            .on("change", function () {
                to.datepicker("option", "minDate", getDate(this));
            }),
            to = $("#to").datepicker({
        defaultDate: "+1w",
        changeMonth: true,
        numberOfMonths: 1
    })
            .on("change", function () {
                from.datepicker("option", "maxDate", getDate(this));
            });

    function getDate(element) {
        var date;
        try {
            date = $.datepicker.parseDate(dateFormat, element.value);
        } catch (error) {
            date = null;
        }

        return date;
    }
});
/***datepicker js end***/
/**toggle js start**/
$(document).ready(function () {
    $('.view_btn').click(function () {
        $(this).toggleClass("open");
        $(this).parents('.view_tr').next().toggleClass("open");
        $(this).parents('.booking_table').siblings('.main_table').find('.open').removeClass('open');
        var v_height = $(this).parents('.view_tr').next().children().outerHeight();
        $('.inner_table').css('height', v_height);
    });
});
/**toggle js end**/
/* START Quantity Box*/
$(".quantity_no").append('<div class="inc button"><span>+</span></div><div class="dec button"><span>-</span></div>');
$(".button").on("click", function () {
    var $button = $(this);
    var oldValue = $button.parent().find("input").val();
    if (oldValue == "") {
        oldValue = 0;
    }
    if ($button.text() == "+") {
        var newVal = parseFloat(oldValue) + 1;
    } else {
        // Don't allow decrementing below zero
        if (oldValue > 0) {
            var newVal = parseFloat(oldValue) - 1;
        } else {
            newVal = 0;
        }
    }
    $button.parent().find("input").val(newVal);
});
/* END Quantity Box */
/* pop_up js end***/
$(".popup_btn").on("click", function () {
    var modal = $(this).data("modal");
    $(modal).show();
    $('body').toggleClass('model_open');
});
$('.popup_close ').click(function () {
    $('.modal').hide();
    $('body').removeClass('model_open');
});
$(".modal").on("click", function (e) {
    var className = e.target.className;
    if (className === "modal") {
        $(this).closest(".modal").hide();
        $('body').removeClass('model_open');
    }
});
/* pop_up js end***/
/** show_hide checkbox js start**/
$(".checkItem").on("click", function () {
    if ($('.checkItem:checked').length > 0) {
        $(".add_rent").show();
    } else {
        $(".add_rent").hide();
    }
});
/** show_hide checkbox js end**/
/** radio_tab js start***/
$(".tab_content").hide();
$(".tab_content:first").show();

/* if in tab mode */
$("ul.tabs li").click(function () {

    $(".tab_content").hide();
    var activeTab = $(this).attr("rel");
    $("#" + activeTab).fadeIn();

    $("ul.tabs li").removeClass("active");
    $(this).addClass("active");

    $(".tab_drawer_heading").removeClass("d_active");
    $(".tab_drawer_heading[rel^='" + activeTab + "']").addClass("d_active");

});
/** radio_tab js end***/
