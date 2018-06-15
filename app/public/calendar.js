var caleandar;
var events = [
    {'Date': new Date(2018, 4, 19), 'Title': 'Powderhorn Shark Tank Final', 'Link': 'https://www.facebook.com/events/161369324497953/'},
    {'Date': new Date(2018, 7, 4), 'Title': 'Powderhorn Art Fair Day 1', 'Link': 'https://www.facebook.com/powderhornartfair/'},
    {'Date': new Date(2018, 7, 5), 'Title': 'Powderhorn Art Fair Day 2', 'Link': 'https://www.facebook.com/powderhornartfair/'}
];

var settings = {
    Color: 'black',
    LinkColor: 'teal',
    NavShow: true,
    NavVertical: false,
    NavLocation: '',
    DateTimeShow: true,
    DateTimeFormat: 'mmm, yyyy',
    DatetimeLocation: '',
    EventClick: '',
    EventTargetWholeDay: false,
    DisabledDays: [],
    ModelChange: '',
};

var element = document.getElementById('caleandar');

caleandar(element, events, settings);