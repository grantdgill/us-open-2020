var fantasy = fantasy || {};

var GOLFERS = {
	RORY_MCILROY: 3470,
	JORDAN_SPIETH: 5467,
	JIMMY_WALKER: 446,
	RICKIE_FOWLER: 3702,
	JB_HOLMES: 1067,
	PHIL_MICKELSON: 308,
	BUBBA_WATSON: 780,
	DUSTIN_JOHNSON: 3448,
	JASON_DAY: 1680,
	TIGER_WOODS: 462,
	ADAM_SCOTT: 388,
	HENRIK_STENSON: 576,
	PATRICK_REED: 5579,
	MATT_KUCHAR: 257,
	BRANDT_SNEDEKER: 1222,
	JUSTIN_ROSE: 569,
	JASON_DUFNER: 110,
	SERGIO_GARCIA: 158,
	LEE_WESTWOOD: 455,
	LOUIS_OOSTHUIZEN: 1293,
	BILLY_HORSCHEL: 1651,
	HIDEKI_MATSUYAMA: 5860,
	ZACH_JOHNSON: 686,
	JIM_FURYK: 153,
	CHRIS_KIRK: 3449,
	COREY_CONNERS: 9126,
	CHARL_SHWARTZEL: 1097,
	DANNY_WILLET: 4304,
	BROOKS_KOEPKA: 6798,
	KEVIN_KISNER: 2552,
	JUSTIN_THOMAS: 4848,
	BILL_HAAS: 774,
	JON_RAHM: 9780,
	MARC_LEISHMAN: 3351,
	ALEX_NOREN: 3832,
	MARTIN_KAYMER: 3670,
	GARY_WOODLAND: 3550,
	NIEBRUGGE: 9402,
	THOMAS_PIETERS: 9031,
	BRYSON_DECHAMBEAU: 10046,
	FABRIZIO_ZANOTTI: 1770,
	TONY_FINAU: 2230,
	CHARLEY_HOFFMAN: 205,
	PAUL_CASEY: 72,
	DANIEL_BERGER: 9025,
	KEVIN_CHAPPELL: 3857,
	RUSSELL_HENLEY: 5409,
	TOMMY_FLEETWOOD: 5539,
	IAN_POULTER: 619,
	XANDER_SCHAUFFELE: 10140,
	KIRADECH_APHIBARNRAT: 5771,
	FRANCESCO_MOLINARI: 1483,
    PATRICK_CANTLAY: 6007,
    SUNGJAE_IM: 11382,
    COLLIN_MORIKAWA: 10592,
    MATTHEW_FITZPATRICK: 9037,
    WEBB_SIMPSON: 1614
};


fantasy.config = {
	tournamentName: 'US Open -- 2020',
	tournamentId: 401219333,
	teams: [
		{
			name: 'GrantG',
			golfers: [
				GOLFERS.XANDER_SCHAUFFELE,
				GOLFERS.DUSTIN_JOHNSON,
				GOLFERS.JON_RAHM,
                GOLFERS.DANIEL_BERGER,
                GOLFERS.SUNGJAE_IM
			]
		}, {
            name: 'MeaganG',
            golfers: [
                GOLFERS.HIDEKI_MATSUYAMA,
                GOLFERS.RORY_MCILROY,
                GOLFERS.RICKIE_FOWLER,
                GOLFERS.JASON_DAY,
                GOLFERS.ADAM_SCOTT
            ]
        }, {
            name: 'AdamP',
            golfers: [
                GOLFERS.JUSTIN_THOMAS,
                GOLFERS.DUSTIN_JOHNSON,
                GOLFERS.TONY_FINAU,
                GOLFERS.COLLIN_MORIKAWA,
                GOLFERS.WEBB_SIMPSON
            ]
        }, {
            name: 'DaveG',
            golfers: [
                GOLFERS.XANDER_SCHAUFFELE,
                GOLFERS.RORY_MCILROY,
                GOLFERS.PATRICK_CANTLAY,
                GOLFERS.TOMMY_FLEETWOOD,
                GOLFERS.MARTIN_KAYMER
            ]
        }, {
            name: 'JohnG',
            golfers: [
                GOLFERS.DUSTIN_JOHNSON,
                GOLFERS.JON_RAHM,
                GOLFERS.RORY_MCILROY,
                GOLFERS.BRYSON_DECHAMBEAU,
                GOLFERS.MATTHEW_FITZPATRICK
            ]
        }, {
            name: 'Laura',
            golfers: [
                GOLFERS.RORY_MCILROY,
                GOLFERS.WEBB_SIMPSON,
                GOLFERS.TONY_FINAU,
                GOLFERS.ADAM_SCOTT,
                GOLFERS.LOUIS_OOSTHUIZEN
            ]
        }
	],
	firstPlaceValue: 50,
	showCut: false,
	apiKey: '_____'
};