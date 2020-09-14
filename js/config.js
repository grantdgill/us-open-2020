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
	PATRICK_CANTLAY: 6007
};


fantasy.config = {
	tournamentName: 'US Open -- 2020',
	tournamentId: 401219333,
	teams: [
		{
			name: 'JackG',
			golfers: [
				GOLFERS.BROOKS_KOEPKA,
				GOLFERS.TIGER_WOODS,
				GOLFERS.JUSTIN_ROSE,
				GOLFERS.FRANCESCO_MOLINARI,
				GOLFERS.BRYSON_DECHAMBEAU
			]
		},
		{
			name: 'Buzz',
			golfers: [
				GOLFERS.BROOKS_KOEPKA,
				GOLFERS.DUSTIN_JOHNSON,
				GOLFERS.RORY_MCILROY,
				GOLFERS.PATRICK_CANTLAY,
				GOLFERS.JUSTIN_ROSE
			]
		},
		{
			name: 'Garrett',
			golfers: [
				GOLFERS.BROOKS_KOEPKA,
				GOLFERS.DUSTIN_JOHNSON,
				GOLFERS.TIGER_WOODS,
				GOLFERS.XANDER_SCHAUFFELE,
				GOLFERS.JASON_DAY
			]
		},
		{
			name: 'JR',
			golfers: [
				GOLFERS.JORDAN_SPIETH,
				GOLFERS.PATRICK_CANTLAY,
				GOLFERS.FRANCESCO_MOLINARI,
				GOLFERS.JASON_DAY,
				GOLFERS.TONY_FINAU
			]
		},
		{
			name: 'Richard',
			golfers: [
				GOLFERS.BROOKS_KOEPKA,
				GOLFERS.DUSTIN_JOHNSON,
				GOLFERS.RORY_MCILROY,
				GOLFERS.TIGER_WOODS,
				GOLFERS.XANDER_SCHAUFFELE
			]
		},
		{
			name: 'Rich',
			golfers: [
				GOLFERS.BROOKS_KOEPKA,
				GOLFERS.RORY_MCILROY,
				GOLFERS.TIGER_WOODS,
				GOLFERS.JUSTIN_THOMAS,
				GOLFERS.PHIL_MICKELSON
			]
		},
		{
			name: 'JimW',
			golfers: [
				GOLFERS.DUSTIN_JOHNSON,
				GOLFERS.TIGER_WOODS,
				GOLFERS.XANDER_SCHAUFFELE,
				GOLFERS.JASON_DAY,
				GOLFERS.TOMMY_FLEETWOOD
			]
		},
		{
			name: 'MattW',
			golfers: [
				GOLFERS.DUSTIN_JOHNSON,
				GOLFERS.TIGER_WOODS,
				GOLFERS.JUSTIN_THOMAS,
				GOLFERS.ADAM_SCOTT,
				GOLFERS.TONY_FINAU
			]
		},
		{
			name: 'GrantG',
			golfers: [
				GOLFERS.BROOKS_KOEPKA,
				GOLFERS.RORY_MCILROY,
				GOLFERS.TIGER_WOODS,
				GOLFERS.TOMMY_FLEETWOOD,
				GOLFERS.PHIL_MICKELSON
			]
		},
		{
			name: 'JettaG',
			golfers: [
				GOLFERS.BROOKS_KOEPKA,
				GOLFERS.DUSTIN_JOHNSON,
				GOLFERS.RORY_MCILROY,
				GOLFERS.FRANCESCO_MOLINARI,
				GOLFERS.PHIL_MICKELSON
			]
		},
		{
			name: 'JohnG',
			golfers: [
				GOLFERS.BROOKS_KOEPKA,
				GOLFERS.DUSTIN_JOHNSON,
				GOLFERS.TIGER_WOODS,
				GOLFERS.TONY_FINAU,
				GOLFERS.PHIL_MICKELSON
			]
		},
		{
			name: 'DaveG',
			golfers: [
				GOLFERS.BROOKS_KOEPKA,
				GOLFERS.XANDER_SCHAUFFELE,
				GOLFERS.FRANCESCO_MOLINARI,
				GOLFERS.TOMMY_FLEETWOOD,
				GOLFERS.BRANDT_SNEDEKER
			]
		},
		{
			name: 'LauraG',
			golfers: [
				GOLFERS.BROOKS_KOEPKA,
				GOLFERS.RORY_MCILROY,
				GOLFERS.JORDAN_SPIETH,
				GOLFERS.PATRICK_CANTLAY,
				GOLFERS.RICKIE_FOWLER
			]
		}
	],
	firstPlaceValue: 50,
	showCut: false,
	apiKey: '_____'
};