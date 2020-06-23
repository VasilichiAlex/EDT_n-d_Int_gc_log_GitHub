/*************************** 
 * Edt_N-D_Int_Gc_Log Test *
 ***************************/

// init psychoJS:
const psychoJS = new PsychoJS({
  debug: true
});

// open window:
psychoJS.openWindow({
  fullscr: false,
  color: new util.Color([1, 1, 1]),
  units: 'height',
  waitBlanking: true
});

// store info about the experiment session:
let expName = 'EDT_n-d_Int_gc_log';  // from the Builder filename that created this script
let expInfo = {'participant': '', 'session': '001'};

// schedule the experiment:
psychoJS.schedule(psychoJS.gui.DlgFromDict({
  dictionary: expInfo,
  title: expName
}));

const flowScheduler = new Scheduler(psychoJS);
const dialogCancelScheduler = new Scheduler(psychoJS);
psychoJS.scheduleCondition(function() { return (psychoJS.gui.dialogComponent.button === 'OK'); }, flowScheduler, dialogCancelScheduler);

// flowScheduler gets run if the participants presses OK
flowScheduler.add(updateInfo); // add timeStamp
flowScheduler.add(experimentInit);
flowScheduler.add(StartRoutineBegin());
flowScheduler.add(StartRoutineEachFrame());
flowScheduler.add(StartRoutineEnd());
const trials_2LoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(trials_2LoopBegin, trials_2LoopScheduler);
flowScheduler.add(trials_2LoopScheduler);
flowScheduler.add(trials_2LoopEnd);
flowScheduler.add(EndRoutineBegin());
flowScheduler.add(EndRoutineEachFrame());
flowScheduler.add(EndRoutineEnd());
flowScheduler.add(quitPsychoJS, '', true);

// quit if user presses Cancel in dialog box:
dialogCancelScheduler.add(quitPsychoJS, '', false);

psychoJS.start({
  expName: expName,
  expInfo: expInfo,
  });


var frameDur;
function updateInfo() {
  expInfo['date'] = util.MonotonicClock.getDateStr();  // add a simple timestamp
  expInfo['expName'] = expName;
  expInfo['psychopyVersion'] = '2020.1.2';
  expInfo['OS'] = window.navigator.platform;

  // store frame rate of monitor if we can measure it successfully
  expInfo['frameRate'] = psychoJS.window.getActualFrameRate();
  if (typeof expInfo['frameRate'] !== 'undefined')
    frameDur = 1.0 / Math.round(expInfo['frameRate']);
  else
    frameDur = 1.0 / 60.0; // couldn't get a reliable measure so guess

  // add info from the URL:
  util.addInfoFromUrl(expInfo);
  
  return Scheduler.Event.NEXT;
}


var StartClock;
var Start_exp;
var Start_key_resp;
var Stimuli_F;
var Stimuli_M;
var Stimuli;
var Emot;
var Emotion;
var Gender;
var trial_G;
var trial;
var startVal_Happy;
var startVal_Angry;
var startVal;
var Stim;
var Intensity;
var corrAns;
var Correctness;
var Correctness_Int;
var Reverse;
var step_sizes;
var step;
var StiClock;
var Stimulus;
var empty_Stim;
var AnsClock;
var Answer;
var key_resp;
var CClock;
var sliderConf;
var key_sliderConf;
var sliderConf_Input;
var sliderConf_Inp_txt;
var Confidence;
var sliderConf_shape;
var lateClock;
var youweretoolate;
var _1_5Clock;
var Blank;
var BrkClock;
var Brk_text;
var Brk_key_resp;
var EndClock;
var End_txt;
var End_key_resp;
var globalClock;
var routineTimer;
function experimentInit() {
  // Initialize components for Routine "Start"
  StartClock = new util.Clock();
  Start_exp = new visual.TextStim({
    win: psychoJS.window,
    name: 'Start_exp',
    text: "We aim to investigate how people discriminate between happy and angry facial expressions.\n\nYou will have to decide within 2 seconds if the face briefly presented on each trial is angry or happy.\n\nANGRY - Left arrow key     |     HAPPY - Right arrow key\n\nThen, you will have to rate within 3 seconds how confident you are in your judgement using a slider from 1 to 100, with indicators Unsure (1), Somewhat sure (34), Fairly sure (67), Very sure(100). \n\nThe run consists of 60 trials, with a short break after the first 30 trials, and will take about 5 minutes.\n\nPress ''Space'' to start...\n",
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.035,  wrapWidth: undefined, ori: 0,
    color: new util.Color('black'),  opacity: 1,
    depth: 0.0 
  });
  
  Start_key_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  function shuffle(arra1) {
      var ctr = arra1.length, temp, index;
      while (ctr > 0) {
          index = Math.floor(Math.random() * ctr);
          ctr--;
          temp = arra1[ctr];
          arra1[ctr] = arra1[index];
          arra1[index] = temp;
      }
      return arra1;
  }
  
  
  Stimuli_F=[['f_000.png','Happy',0,'F'],['f_001.png','Happy',1,'F'],['f_002.png','Happy',2,'F'],['f_003.png','Happy',3,'F'],['f_004.png','Happy',4,'F'],['f_005.png','Happy',5,'F'],['f_006.png','Happy',6,'F'],['f_007.png','Happy',7,'F'],['f_008.png','Happy',8,'F'],['f_009.png','Happy',9,'F'],['f_010.png','Happy',10,'F'],['f_011.png','Happy',11,'F'],['f_012.png','Happy',12,'F'],['f_013.png','Happy',13,'F'],['f_014.png','Happy',14,'F'],['f_015.png','Happy',15,'F'],['f_016.png','Happy',16,'F'],['f_017.png','Happy',17,'F'],['f_018.png','Happy',18,'F'],['f_019.png','Happy',19,'F'],
  ['f_020.png','Happy',20,'F'],['f_021.png','Happy',21,'F'],['f_022.png','Happy',22,'F'],['f_023.png','Happy',23,'F'],['f_024.png','Happy',24,'F'],['f_025.png','Happy',25,'F'],['f_026.png','Happy',26,'F'],['f_027.png','Happy',27,'F'],['f_028.png','Happy',28,'F'],['f_029.png','Happy',29,'F'],['f_030.png','Happy',30,'F'],['f_031.png','Happy',31,'F'],['f_032.png','Happy',32,'F'],['f_033.png','Happy',33,'F'],['f_034.png','Happy',34,'F'],['f_035.png','Happy',35,'F'],['f_036.png','Happy',36,'F'],['f_037.png','Happy',37,'F'],['f_038.png','Happy',38,'F'],['f_039.png','Happy',39,'F'],
  ['f_040.png','Happy',40,'F'],['f_041.png','Happy',41,'F'],['f_042.png','Happy',42,'F'],['f_043.png','Happy',43,'F'],['f_044.png','Happy',44,'F'],['f_045.png','Happy',45,'F'],['f_046.png','Happy',46,'F'],['f_047.png','Happy',47,'F'],['f_048.png','Happy',48,'F'],['f_049.png','Happy',49,'F'],['f_050.png','Happy',50,'F'],['f_051.png','Happy',51,'F'],['f_052.png','Happy',52,'F'],['f_053.png','Happy',53,'F'],['f_054.png','Happy',54,'F'],['f_055.png','Happy',55,'F'],['f_056.png','Happy',56,'F'],['f_057.png','Happy',57,'F'],['f_058.png','Happy',58,'F'],['f_059.png','Happy',59,'F'],
  ['f_060.png','Happy',60,'F'],['f_061.png','Happy',61,'F'],['f_062.png','Happy',62,'F'],['f_063.png','Happy',63,'F'],['f_064.png','Happy',64,'F'],['f_065.png','Happy',65,'F'],['f_066.png','Happy',66,'F'],['f_067.png','Happy',67,'F'],['f_068.png','Happy',68,'F'],['f_069.png','Happy',69,'F'],['f_070.png','Happy',70,'F'],['f_071.png','Happy',71,'F'],['f_072.png','Happy',72,'F'],['f_073.png','Happy',73,'F'],['f_074.png','Happy',74,'F'],['f_075.png','Happy',75,'F'],['f_076.png','Happy',76,'F'],['f_077.png','Happy',77,'F'],['f_078.png','Happy',78,'F'],['f_079.png','Happy',79,'F'],
  ['f_080.png','Happy',80,'F'],['f_081.png','Happy',81,'F'],['f_082.png','Happy',82,'F'],['f_083.png','Happy',83,'F'],['f_084.png','Happy',84,'F'],['f_085.png','Happy',85,'F'],['f_086.png','Happy',86,'F'],['f_087.png','Happy',87,'F'],['f_088.png','Happy',88,'F'],['f_089.png','Happy',89,'F'],['f_090.png','Happy',90,'F'],['f_091.png','Happy',91,'F'],['f_092.png','Happy',92,'F'],['f_093.png','Happy',93,'F'],['f_094.png','Happy',94,'F'],['f_095.png','Happy',95,'F'],['f_096.png','Happy',96,'F'],['f_097.png','Happy',97,'F'],['f_098.png','Happy',98,'F'],['f_099.png','Happy',99,'F'],
  ['f_101.png','Angry',101,'F'],['f_102.png','Angry',102,'F'],['f_103.png','Angry',103,'F'],['f_104.png','Angry',104,'F'],['f_105.png','Angry',105,'F'],['f_106.png','Angry',106,'F'],['f_107.png','Angry',107,'F'],['f_108.png','Angry',108,'F'],['f_109.png','Angry',109,'F'],['f_110.png','Angry',110,'F'],['f_111.png','Angry',111,'F'],['f_112.png','Angry',112,'F'],['f_113.png','Angry',113,'F'],['f_114.png','Angry',114,'F'],['f_115.png','Angry',115,'F'],['f_116.png','Angry',116,'F'],['f_117.png','Angry',117,'F'],['f_118.png','Angry',118,'F'],['f_119.png','Angry',119,'F'],['f_120.png','Angry',120,'F'],
  ['f_121.png','Angry',121,'F'],['f_122.png','Angry',122,'F'],['f_123.png','Angry',123,'F'],['f_124.png','Angry',124,'F'],['f_125.png','Angry',125,'F'],['f_126.png','Angry',126,'F'],['f_127.png','Angry',127,'F'],['f_128.png','Angry',128,'F'],['f_129.png','Angry',129,'F'],['f_130.png','Angry',130,'F'],['f_131.png','Angry',131,'F'],['f_132.png','Angry',132,'F'],['f_133.png','Angry',133,'F'],['f_134.png','Angry',134,'F'],['f_135.png','Angry',135,'F'],['f_136.png','Angry',136,'F'],['f_137.png','Angry',137,'F'],['f_138.png','Angry',138,'F'],['f_139.png','Angry',139,'F'],['f_140.png','Angry',140,'F'],
  ['f_141.png','Angry',141,'F'],['f_142.png','Angry',142,'F'],['f_143.png','Angry',143,'F'],['f_144.png','Angry',144,'F'],['f_145.png','Angry',145,'F'],['f_146.png','Angry',146,'F'],['f_147.png','Angry',147,'F'],['f_148.png','Angry',148,'F'],['f_149.png','Angry',149,'F'],['f_150.png','Angry',150,'F'],['f_151.png','Angry',151,'F'],['f_152.png','Angry',152,'F'],['f_153.png','Angry',153,'F'],['f_154.png','Angry',154,'F'],['f_155.png','Angry',155,'F'],['f_156.png','Angry',156,'F'],['f_157.png','Angry',157,'F'],['f_158.png','Angry',158,'F'],['f_159.png','Angry',159,'F'],['f_160.png','Angry',160,'F'],
  ['f_161.png','Angry',161,'F'],['f_162.png','Angry',162,'F'],['f_163.png','Angry',163,'F'],['f_164.png','Angry',164,'F'],['f_165.png','Angry',165,'F'],['f_166.png','Angry',166,'F'],['f_167.png','Angry',167,'F'],['f_168.png','Angry',168,'F'],['f_169.png','Angry',169,'F'],['f_170.png','Angry',170,'F'],['f_171.png','Angry',171,'F'],['f_172.png','Angry',172,'F'],['f_173.png','Angry',173,'F'],['f_174.png','Angry',174,'F'],['f_175.png','Angry',175,'F'],['f_176.png','Angry',176,'F'],['f_177.png','Angry',177,'F'],['f_178.png','Angry',178,'F'],['f_179.png','Angry',179,'F'],['f_180.png','Angry',180,'F'],
  ['f_181.png','Angry',181,'F'],['f_182.png','Angry',182,'F'],['f_183.png','Angry',183,'F'],['f_184.png','Angry',184,'F'],['f_185.png','Angry',185,'F'],['f_186.png','Angry',186,'F'],['f_187.png','Angry',187,'F'],['f_188.png','Angry',188,'F'],['f_189.png','Angry',189,'F'],['f_190.png','Angry',190,'F'],['f_191.png','Angry',191,'F'],['f_192.png','Angry',192,'F'],['f_193.png','Angry',193,'F'],['f_194.png','Angry',194,'F'],['f_195.png','Angry',195,'F'],['f_196.png','Angry',196,'F'],['f_197.png','Angry',197,'F'],['f_198.png','Angry',198,'F'],['f_199.png','Angry',199,'F'],['f_200.png','Angry',200,'F']];
  
  Stimuli_M=[['m_000.png','Happy',0,'M'],['m_001.png','Happy',1,'M'],['m_002.png','Happy',2,'M'], ['m_003.png','Happy',3,'M'],['m_004.png','Happy',4,'M'],['m_005.png','Happy',5,'M'],['m_006.png','Happy',6,'M'],['m_007.png','Happy',7,'M'],['m_008.png','Happy',8,'M'],['m_009.png','Happy',9,'M'],['m_010.png','Happy',10,'M'],['m_011.png','Happy',11,'M'],['m_012.png','Happy',12,'M'],['m_013.png','Happy',13,'M'],['m_014.png','Happy',14,'M'],['m_015.png','Happy',15,'M'],['m_016.png','Happy',16,'M'],['m_017.png','Happy',17,'M'],['m_018.png','Happy',18,'M'],['m_019.png','Happy',19,'M'],
  ['m_020.png','Happy',20,'M'],['m_021.png','Happy',21,'M'],['m_022.png','Happy',22,'M'],['m_023.png','Happy',23,'M'],['m_024.png','Happy',24,'M'],['m_025.png','Happy',25,'M'],['m_026.png','Happy',26,'M'],['m_027.png','Happy',27,'M'],['m_028.png','Happy',28,'M'],['m_029.png','Happy',29,'M'],['m_030.png','Happy',30,'M'],['m_031.png','Happy',31,'M'],['m_032.png','Happy',32,'M'],['m_033.png','Happy',33,'M'],['m_034.png','Happy',34,'M'],['m_035.png','Happy',35,'M'],['m_036.png','Happy',36,'M'],['m_037.png','Happy',37,'M'],['m_038.png','Happy',38,'M'],['m_039.png','Happy',39,'M'],
  ['m_040.png','Happy',40,'M'],['m_041.png','Happy',41,'M'],['m_042.png','Happy',42,'M'],['m_043.png','Happy',43,'M'],['m_044.png','Happy',44,'M'],['m_045.png','Happy',45,'M'],['m_046.png','Happy',46,'M'],['m_047.png','Happy',47,'M'],['m_048.png','Happy',48,'M'],['m_049.png','Happy',49,'M'],['m_050.png','Happy',50,'M'],['m_051.png','Happy',51,'M'],['m_052.png','Happy',52,'M'],['m_053.png','Happy',53,'M'],['m_054.png','Happy',54,'M'],['m_055.png','Happy',55,'M'],['m_056.png','Happy',56,'M'],['m_057.png','Happy',57,'M'],['m_058.png','Happy',58,'M'],['m_059.png','Happy',59,'M'],
  ['m_060.png','Happy',60,'M'],['m_061.png','Happy',61,'M'],['m_062.png','Happy',62,'M'],['m_063.png','Happy',63,'M'],['m_064.png','Happy',64,'M'],['m_065.png','Happy',65,'M'],['m_066.png','Happy',66,'M'],['m_067.png','Happy',67,'M'],['m_068.png','Happy',68,'M'],['m_069.png','Happy',69,'M'],['m_070.png','Happy',70,'M'],['m_071.png','Happy',71,'M'],['m_072.png','Happy',72,'M'],['m_073.png','Happy',73,'M'],['m_074.png','Happy',74,'M'],['m_075.png','Happy',75,'M'],['m_076.png','Happy',76,'M'],['m_077.png','Happy',77,'M'],['m_078.png','Happy',78,'M'],['m_079.png','Happy',79,'M'],
  ['m_080.png','Happy',80,'M'],['m_081.png','Happy',81,'M'],['m_082.png','Happy',82,'M'],['m_083.png','Happy',83,'M'],['m_084.png','Happy',84,'M'],['m_085.png','Happy',85,'M'],['m_086.png','Happy',86,'M'],['m_087.png','Happy',87,'M'],['m_088.png','Happy',88,'M'],['m_089.png','Happy',89,'M'],['m_090.png','Happy',90,'M'],['m_091.png','Happy',91,'M'],['m_092.png','Happy',92,'M'],['m_093.png','Happy',93,'M'],['m_094.png','Happy',94,'M'],['m_095.png','Happy',95,'M'],['m_096.png','Happy',96,'M'],['m_097.png','Happy',97,'M'],['m_098.png','Happy',98,'M'],['m_099.png','Happy',99,'M'],
  ['m_101.png','Angry',101,'M'],['m_102.png','Angry',102,'M'],['m_103.png','Angry',103,'M'],['m_104.png','Angry',104,'M'],['m_105.png','Angry',105,'M'],['m_106.png','Angry',106,'M'],['m_107.png','Angry',107,'M'],['m_108.png','Angry',108,'M'],['m_109.png','Angry',109,'M'],['m_110.png','Angry',110,'M'],['m_111.png','Angry',111,'M'],['m_112.png','Angry',112,'M'],['m_113.png','Angry',113,'M'],['m_114.png','Angry',114,'M'],['m_115.png','Angry',115,'M'],['m_116.png','Angry',116,'M'],['m_117.png','Angry',117,'M'],['m_118.png','Angry',118,'M'],['m_119.png','Angry',119,'M'],['m_120.png','Angry',120,'M'],
  ['m_121.png','Angry',121,'M'],['m_122.png','Angry',122,'M'],['m_123.png','Angry',123,'M'],['m_124.png','Angry',124,'M'],['m_125.png','Angry',125,'M'],['m_126.png','Angry',126,'M'],['m_127.png','Angry',127,'M'],['m_128.png','Angry',128,'M'],['m_129.png','Angry',129,'M'],['m_130.png','Angry',130,'M'],['m_131.png','Angry',131,'M'],['m_132.png','Angry',132,'M'],['m_133.png','Angry',133,'M'],['m_134.png','Angry',134,'M'],['m_135.png','Angry',135,'M'],['m_136.png','Angry',136,'M'],['m_137.png','Angry',137,'M'],['m_138.png','Angry',138,'M'],['m_139.png','Angry',139,'M'],['m_140.png','Angry',140,'M'],
  ['m_141.png','Angry',141,'M'],['m_142.png','Angry',142,'M'],['m_143.png','Angry',143,'M'],['m_144.png','Angry',144,'M'],['m_145.png','Angry',145,'M'],['m_146.png','Angry',146,'M'],['m_147.png','Angry',147,'M'],['m_148.png','Angry',148,'M'],['m_149.png','Angry',149,'M'],['m_150.png','Angry',150,'M'],['m_151.png','Angry',151,'M'],['m_152.png','Angry',152,'M'],['m_153.png','Angry',153,'M'],['m_154.png','Angry',154,'M'],['m_155.png','Angry',155,'M'],['m_156.png','Angry',156,'M'],['m_157.png','Angry',157,'M'],['m_158.png','Angry',158,'M'],['m_159.png','Angry',159,'M'],['m_160.png','Angry',160,'M'],
  ['m_161.png','Angry',161,'M'],['m_162.png','Angry',162,'M'],['m_163.png','Angry',163,'M'],['m_164.png','Angry',164,'M'],['m_165.png','Angry',165,'M'],['m_166.png','Angry',166,'M'],['m_167.png','Angry',167,'M'],['m_168.png','Angry',168,'M'],['m_169.png','Angry',169,'M'],['m_170.png','Angry',170,'M'],['m_171.png','Angry',171,'M'],['m_172.png','Angry',172,'M'],['m_173.png','Angry',173,'M'],['m_174.png','Angry',174,'M'],['m_175.png','Angry',175,'M'],['m_176.png','Angry',176,'M'],['m_177.png','Angry',177,'M'],['m_178.png','Angry',178,'M'],['m_179.png','Angry',179,'M'],['m_180.png','Angry',180,'M'],
  ['m_181.png','Angry',181,'M'],['m_182.png','Angry',182,'M'],['m_183.png','Angry',183,'M'],['m_184.png','Angry',184,'M'],['m_185.png','Angry',185,'M'],['m_186.png','Angry',186,'M'],['m_187.png','Angry',187,'M'],['m_188.png','Angry',188,'M'],['m_189.png','Angry',189,'M'],['m_190.png','Angry',190,'M'],['m_191.png','Angry',191,'M'],['m_192.png','Angry',192,'M'],['m_193.png','Angry',193,'M'],['m_194.png','Angry',194,'M'],['m_195.png','Angry',195,'M'],['m_196.png','Angry',196,'M'],['m_197.png','Angry',197,'M'],['m_198.png','Angry',198,'M'],['m_199.png','Angry',199,'M'],['m_200.png','Angry',200,'M']];
  
  
  Stimuli = [];
  
  Emot = ["Happy", "Angry"];
  Emot = shuffle(Emot);
  
  
  Emotion = 0;
  
  Gender=["F","M","F","M","F","M","F","M","F","M","F","M","F","M","F","M","F","M","F","M","F","M","F","M","F","M","F","M","F","M"];
  Gender = shuffle(Gender);
  
  
  trial_G = 0;
  trial=0
  
  startVal_Happy = 16;
  startVal_Angry = 185;
  
  startVal = eval('startVal_'+Emot[Emotion]);
  console.log("startVal ", startVal);
  
  Stimuli = eval("Stimuli_" + Gender[trial_G]);
  
  Stim = [];
  
  Stim=Stimuli[startVal][0];
  
  Intensity = [];
  
  corrAns = [];
  Correctness = [];
  Correctness_Int = [];
  Reverse = 0;
  step_sizes=[32,16,8,6,4,2];
  step=step_sizes[0];
  
  
  // Initialize components for Routine "Sti"
  StiClock = new util.Clock();
  Stimulus = new visual.ImageStim({
    win : psychoJS.window,
    name : 'Stimulus', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0, pos : [0, 0], size : undefined,
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : 0.0 
  });
  empty_Stim = new visual.TextStim({
    win: psychoJS.window,
    name: 'empty_Stim',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.03,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -1.0 
  });
  
  // Initialize components for Routine "Ans"
  AnsClock = new util.Clock();
  Answer = new visual.TextStim({
    win: psychoJS.window,
    name: 'Answer',
    text: 'ANGRY (L arrow key) or HAPPY (R arrow key)',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.035,  wrapWidth: undefined, ori: 0,
    color: new util.Color('black'),  opacity: 1,
    depth: 0.0 
  });
  
  key_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "C"
  CClock = new util.Clock();
  sliderConf = new visual.Slider({
    win: psychoJS.window, name: 'sliderConf',
    size: [1.0, 0.03], pos: [0, 0], units: 'height',
    labels: ['Unsure', 'Somewhat sure', 'Fairly sure', 'Very sure'], ticks: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100],
    granularity: 1, style: [visual.Slider.Style.RATING],
    color: new util.Color('Black'), 
    fontFamily: 'Arial', bold: true, italic: false, 
    flip: false,
  });
  
  key_sliderConf = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  sliderConf_Input = new visual.TextStim({
    win: psychoJS.window,
    name: 'sliderConf_Input',
    text: 'default text',
    font: 'Arial',
    units: undefined, 
    pos: [0, (- 0.15)], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color('red'),  opacity: 1,
    depth: -3.0 
  });
  
  sliderConf_Inp_txt = new visual.TextStim({
    win: psychoJS.window,
    name: 'sliderConf_Inp_txt',
    text: 'Respond using the slider, then press Space to continue...',
    font: 'Arial',
    units: undefined, 
    pos: [0, (- 0.3)], height: 0.03,  wrapWidth: undefined, ori: 0,
    color: new util.Color('black'),  opacity: 1,
    depth: -4.0 
  });
  
  Confidence = new visual.TextStim({
    win: psychoJS.window,
    name: 'Confidence',
    text: 'How confident are you in your judgement?',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.2], height: 0.03,  wrapWidth: undefined, ori: 0,
    color: new util.Color('black'),  opacity: 1,
    depth: -6.0 
  });
  
  sliderConf_shape = new visual.Rect ({
    win: psychoJS.window, name: 'sliderConf_shape', 
    width: [0.3, 0.15][0], height: [0.3, 0.15][1],
    ori: 0, pos: [0, (- 0.16)],
    lineWidth: 1, lineColor: new util.Color([1, 1, 1]),
    fillColor: new util.Color([1, 1, 1]),
    opacity: 1, depth: -7, interpolate: true,
  });
  
  // Initialize components for Routine "late"
  lateClock = new util.Clock();
  youweretoolate = new visual.TextStim({
    win: psychoJS.window,
    name: 'youweretoolate',
    text: 'YOU WERE TOO LATE',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.04,  wrapWidth: undefined, ori: 0,
    color: new util.Color('black'),  opacity: 1,
    depth: 0.0 
  });
  
  // Initialize components for Routine "_1_5"
  _1_5Clock = new util.Clock();
  Blank = new visual.TextStim({
    win: psychoJS.window,
    name: 'Blank',
    text: '\n',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.15], height: 0.03,  wrapWidth: undefined, ori: 0,
    color: new util.Color([1, 1, 1]),  opacity: 1,
    depth: -1.0 
  });
  
  // Initialize components for Routine "Brk"
  BrkClock = new util.Clock();
  Brk_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'Brk_text',
    text: 'Take a short break...\n\nWhen you are ready to continue, press Space...',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.035,  wrapWidth: undefined, ori: 0,
    color: new util.Color('black'),  opacity: 1,
    depth: -1.0 
  });
  
  Brk_key_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "End"
  EndClock = new util.Clock();
  End_txt = new visual.TextStim({
    win: psychoJS.window,
    name: 'End_txt',
    text: 'You have completed the session. Thank you!\n\nPress Space to finish',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.04,  wrapWidth: undefined, ori: 0,
    color: new util.Color('black'),  opacity: 1,
    depth: 0.0 
  });
  
  End_key_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Create some handy timers
  globalClock = new util.Clock();  // to track the time since experiment started
  routineTimer = new util.CountdownTimer();  // to track time remaining of each (non-slip) routine
  
  return Scheduler.Event.NEXT;
}


var t;
var frameN;
var _Start_key_resp_allKeys;
var StartComponents;
function StartRoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'Start'-------
    t = 0;
    StartClock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    Start_key_resp.keys = undefined;
    Start_key_resp.rt = undefined;
    _Start_key_resp_allKeys = [];
    // keep track of which components have finished
    StartComponents = [];
    StartComponents.push(Start_exp);
    StartComponents.push(Start_key_resp);
    
    StartComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    
    return Scheduler.Event.NEXT;
  };
}


var continueRoutine;
function StartRoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'Start'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = StartClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *Start_exp* updates
    if (t >= 0.0 && Start_exp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Start_exp.tStart = t;  // (not accounting for frame time here)
      Start_exp.frameNStart = frameN;  // exact frame index
      
      Start_exp.setAutoDraw(true);
    }

    
    // *Start_key_resp* updates
    if (t >= 0.0 && Start_key_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Start_key_resp.tStart = t;  // (not accounting for frame time here)
      Start_key_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { Start_key_resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { Start_key_resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { Start_key_resp.clearEvents(); });
    }

    if (Start_key_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = Start_key_resp.getKeys({keyList: ['space'], waitRelease: false});
      _Start_key_resp_allKeys = _Start_key_resp_allKeys.concat(theseKeys);
      if (_Start_key_resp_allKeys.length > 0) {
        Start_key_resp.keys = _Start_key_resp_allKeys[_Start_key_resp_allKeys.length - 1].name;  // just the last key pressed
        Start_key_resp.rt = _Start_key_resp_allKeys[_Start_key_resp_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    StartComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function StartRoutineEnd(trials) {
  return function () {
    //------Ending Routine 'Start'-------
    StartComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('Start_key_resp.keys', Start_key_resp.keys);
    if (typeof Start_key_resp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('Start_key_resp.rt', Start_key_resp.rt);
        routineTimer.reset();
        }
    
    Start_key_resp.stop();
    // the Routine "Start" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var trials_2;
var currentLoop;
function trials_2LoopBegin(thisScheduler) {
  // set up handler to look after randomisation of conditions etc
  trials_2 = new TrialHandler({
    psychoJS: psychoJS,
    nReps: 2, method: TrialHandler.Method.RANDOM,
    extraInfo: expInfo, originPath: undefined,
    trialList: undefined,
    seed: undefined, name: 'trials_2'
  });
  psychoJS.experiment.addLoop(trials_2); // add the loop to the experiment
  currentLoop = trials_2;  // we're now the current loop

  // Schedule all the trials in the trialList:
  trials_2.forEach(function() {
    const snapshot = trials_2.getSnapshot();

    thisScheduler.add(importConditions(snapshot));
    const trials_1LoopScheduler = new Scheduler(psychoJS);
    thisScheduler.add(trials_1LoopBegin, trials_1LoopScheduler);
    thisScheduler.add(trials_1LoopScheduler);
    thisScheduler.add(trials_1LoopEnd);
    thisScheduler.add(BrkRoutineBegin(snapshot));
    thisScheduler.add(BrkRoutineEachFrame(snapshot));
    thisScheduler.add(BrkRoutineEnd(snapshot));
    thisScheduler.add(endLoopIteration(thisScheduler, snapshot));
  });

  return Scheduler.Event.NEXT;
}


var trials_1;
function trials_1LoopBegin(thisScheduler) {
  // set up handler to look after randomisation of conditions etc
  trials_1 = new TrialHandler({
    psychoJS: psychoJS,
    nReps: 30, method: TrialHandler.Method.RANDOM,
    extraInfo: expInfo, originPath: undefined,
    trialList: undefined,
    seed: undefined, name: 'trials_1'
  });
  psychoJS.experiment.addLoop(trials_1); // add the loop to the experiment
  currentLoop = trials_1;  // we're now the current loop

  // Schedule all the trials in the trialList:
  trials_1.forEach(function() {
    const snapshot = trials_1.getSnapshot();

    thisScheduler.add(importConditions(snapshot));
    thisScheduler.add(StiRoutineBegin(snapshot));
    thisScheduler.add(StiRoutineEachFrame(snapshot));
    thisScheduler.add(StiRoutineEnd(snapshot));
    thisScheduler.add(AnsRoutineBegin(snapshot));
    thisScheduler.add(AnsRoutineEachFrame(snapshot));
    thisScheduler.add(AnsRoutineEnd(snapshot));
    thisScheduler.add(CRoutineBegin(snapshot));
    thisScheduler.add(CRoutineEachFrame(snapshot));
    thisScheduler.add(CRoutineEnd(snapshot));
    thisScheduler.add(lateRoutineBegin(snapshot));
    thisScheduler.add(lateRoutineEachFrame(snapshot));
    thisScheduler.add(lateRoutineEnd(snapshot));
    thisScheduler.add(_1_5RoutineBegin(snapshot));
    thisScheduler.add(_1_5RoutineEachFrame(snapshot));
    thisScheduler.add(_1_5RoutineEnd(snapshot));
    thisScheduler.add(endLoopIteration(thisScheduler, snapshot));
  });

  return Scheduler.Event.NEXT;
}


function trials_1LoopEnd() {
  psychoJS.experiment.removeLoop(trials_1);

  return Scheduler.Event.NEXT;
}


function trials_2LoopEnd() {
  psychoJS.experiment.removeLoop(trials_2);

  return Scheduler.Event.NEXT;
}


var StiComponents;
function StiRoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'Sti'-------
    t = 0;
    StiClock.reset(); // clock
    frameN = -1;
    routineTimer.add(1.200000);
    // update component parameters for each repeat
    Stimulus.setImage(('Stimuli/' + Stim));
    // keep track of which components have finished
    StiComponents = [];
    StiComponents.push(Stimulus);
    StiComponents.push(empty_Stim);
    
    StiComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    
    return Scheduler.Event.NEXT;
  };
}


var frameRemains;
function StiRoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'Sti'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = StiClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *Stimulus* updates
    if (t >= 0.0 && Stimulus.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Stimulus.tStart = t;  // (not accounting for frame time here)
      Stimulus.frameNStart = frameN;  // exact frame index
      
      Stimulus.setAutoDraw(true);
    }

    frameRemains = 0.0 + 1.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (Stimulus.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      Stimulus.setAutoDraw(false);
    }
    
    // *empty_Stim* updates
    if (t >= 0.0 && empty_Stim.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      empty_Stim.tStart = t;  // (not accounting for frame time here)
      empty_Stim.frameNStart = frameN;  // exact frame index
      
      empty_Stim.setAutoDraw(true);
    }

    frameRemains = 0.0 + 1.2 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (empty_Stim.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      empty_Stim.setAutoDraw(false);
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    StiComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function StiRoutineEnd(trials) {
  return function () {
    //------Ending Routine 'Sti'-------
    StiComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    return Scheduler.Event.NEXT;
  };
}


var _key_resp_allKeys;
var AnsComponents;
function AnsRoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'Ans'-------
    t = 0;
    AnsClock.reset(); // clock
    frameN = -1;
    routineTimer.add(2.000000);
    // update component parameters for each repeat
    key_resp.keys = undefined;
    key_resp.rt = undefined;
    _key_resp_allKeys = [];
    // keep track of which components have finished
    AnsComponents = [];
    AnsComponents.push(Answer);
    AnsComponents.push(key_resp);
    
    AnsComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    
    return Scheduler.Event.NEXT;
  };
}


function AnsRoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'Ans'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = AnsClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *Answer* updates
    if (t >= 0.0 && Answer.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Answer.tStart = t;  // (not accounting for frame time here)
      Answer.frameNStart = frameN;  // exact frame index
      
      Answer.setAutoDraw(true);
    }

    frameRemains = 0.0 + 2.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (Answer.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      Answer.setAutoDraw(false);
    }
    
    // *key_resp* updates
    if (t >= 0.0 && key_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp.tStart = t;  // (not accounting for frame time here)
      key_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp.clearEvents(); });
    }

    frameRemains = 0.0 + 2.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (key_resp.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      key_resp.status = PsychoJS.Status.FINISHED;
  }

    if (key_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp.getKeys({keyList: ['left', 'right'], waitRelease: false});
      _key_resp_allKeys = _key_resp_allKeys.concat(theseKeys);
      if (_key_resp_allKeys.length > 0) {
        key_resp.keys = _key_resp_allKeys[_key_resp_allKeys.length - 1].name;  // just the last key pressed
        key_resp.rt = _key_resp_allKeys[_key_resp_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    AnsComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function AnsRoutineEnd(trials) {
  return function () {
    //------Ending Routine 'Ans'-------
    AnsComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('key_resp.keys', key_resp.keys);
    if (typeof key_resp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp.rt', key_resp.rt);
        routineTimer.reset();
        }
    
    key_resp.stop();
    return Scheduler.Event.NEXT;
  };
}


var _key_sliderConf_allKeys;
var CComponents;
function CRoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'C'-------
    t = 0;
    CClock.reset(); // clock
    frameN = -1;
    routineTimer.add(3.200000);
    // update component parameters for each repeat
    sliderConf.reset()
    key_sliderConf.keys = undefined;
    key_sliderConf.rt = undefined;
    _key_sliderConf_allKeys = [];
    // keep track of which components have finished
    CComponents = [];
    CComponents.push(sliderConf);
    CComponents.push(key_sliderConf);
    CComponents.push(sliderConf_Input);
    CComponents.push(sliderConf_Inp_txt);
    CComponents.push(Confidence);
    CComponents.push(sliderConf_shape);
    
    CComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    
    return Scheduler.Event.NEXT;
  };
}


function CRoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'C'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = CClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *sliderConf* updates
    if (t >= 0.2 && sliderConf.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      sliderConf.tStart = t;  // (not accounting for frame time here)
      sliderConf.frameNStart = frameN;  // exact frame index
      
      sliderConf.setAutoDraw(true);
    }

    frameRemains = 0.2 + 3 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (sliderConf.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      sliderConf.setAutoDraw(false);
    }
    let theseKeys = psychoJS.eventManager.getKeys({keyList:['space']});
    
    if (theseKeys.length > 0) { 
        if (sliderConf.getRating() === undefined) {
            continueRoutine = true;
        } else if (sliderConf.getRating() !== undefined) {
            continueRoutine = false;
        }
    }
    
    //if (sliderConf.getRating() === undefined) {
    //    continueRouting = true;
    //}
    
    // *key_sliderConf* updates
    if (t >= 0.2 && key_sliderConf.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_sliderConf.tStart = t;  // (not accounting for frame time here)
      key_sliderConf.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_sliderConf.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_sliderConf.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_sliderConf.clearEvents(); });
    }

    frameRemains = 0.2 + 3 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (key_sliderConf.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      key_sliderConf.status = PsychoJS.Status.FINISHED;
  }

    if (key_sliderConf.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_sliderConf.getKeys({keyList: ['space'], waitRelease: false});
      _key_sliderConf_allKeys = _key_sliderConf_allKeys.concat(theseKeys);
      if (_key_sliderConf_allKeys.length > 0) {
        key_sliderConf.keys = _key_sliderConf_allKeys[_key_sliderConf_allKeys.length - 1].name;  // just the last key pressed
        key_sliderConf.rt = _key_sliderConf_allKeys[_key_sliderConf_allKeys.length - 1].rt;
      }
    }
    
    
    // *sliderConf_Input* updates
    if (t >= 0 && sliderConf_Input.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      sliderConf_Input.tStart = t;  // (not accounting for frame time here)
      sliderConf_Input.frameNStart = frameN;  // exact frame index
      
      sliderConf_Input.setAutoDraw(true);
    }

    frameRemains = 0 + 3.2 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (sliderConf_Input.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      sliderConf_Input.setAutoDraw(false);
    }
    
    if (sliderConf_Input.status === PsychoJS.Status.STARTED){ // only update if being drawn
      sliderConf_Input.setText(sliderConf.getRating());
    }
    
    // *sliderConf_Inp_txt* updates
    if (t >= 0.2 && sliderConf_Inp_txt.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      sliderConf_Inp_txt.tStart = t;  // (not accounting for frame time here)
      sliderConf_Inp_txt.frameNStart = frameN;  // exact frame index
      
      sliderConf_Inp_txt.setAutoDraw(true);
    }

    frameRemains = 0.2 + 3 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (sliderConf_Inp_txt.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      sliderConf_Inp_txt.setAutoDraw(false);
    }
    if ((key_resp.keys !== "left") && (key_resp.keys !== "right")) {
        continueRoutine = false;
    }
    
    // *Confidence* updates
    if (t >= 0.2 && Confidence.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Confidence.tStart = t;  // (not accounting for frame time here)
      Confidence.frameNStart = frameN;  // exact frame index
      
      Confidence.setAutoDraw(true);
    }

    frameRemains = 0.2 + 3.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (Confidence.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      Confidence.setAutoDraw(false);
    }
    
    // *sliderConf_shape* updates
    if (t >= 0.0 && sliderConf_shape.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      sliderConf_shape.tStart = t;  // (not accounting for frame time here)
      sliderConf_shape.frameNStart = frameN;  // exact frame index
      
      sliderConf_shape.setAutoDraw(true);
    }

    frameRemains = 0.0 + 0.2 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (sliderConf_shape.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      sliderConf_shape.setAutoDraw(false);
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    CComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function CRoutineEnd(trials) {
  return function () {
    //------Ending Routine 'C'-------
    CComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('sliderConf.response', sliderConf.getRating());
    psychoJS.experiment.addData('sliderConf.rt', sliderConf.getRT());
    psychoJS.experiment.addData('key_sliderConf.keys', key_sliderConf.keys);
    if (typeof key_sliderConf.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_sliderConf.rt', key_sliderConf.rt);
        }
    
    key_sliderConf.stop();
    psychoJS.experiment.addData("Intensity", Stimuli[startVal][2]);
    Intensity.push([Stimuli[startVal][2], Stimuli[startVal][1]]);
    
    if ((key_resp.keys !== "left") && (key_resp.keys !== "right")) {
        corrAns.push('NA');
    } else if ((key_resp.keys === "left") || (key_resp.keys === "right")) {
        if ((key_resp.keys === "left") && (Stimuli[startVal][1] == 'Angry')) {
            corrAns.push(1);
            Correctness.push(1);
            Correctness_Int.push(Intensity[Intensity.length-1][1]);
        } else if ((key_resp.keys === "left") && (Stimuli[startVal][1] == 'Happy')) {
            corrAns.push(0);
            Correctness.push(0);
            Correctness_Int.push(Intensity[Intensity.length-1][1]);
        } else if ((key_resp.keys === "right") && (Stimuli[startVal][1] == 'Happy')) {
            corrAns.push(1);
            Correctness.push(1);
            Correctness_Int.push(Intensity[Intensity.length-1][1]);
        } else if ((key_resp.keys === "right") && (Stimuli[startVal][1] == 'Angry')) {
            corrAns.push(0);
            Correctness.push(0);
            Correctness_Int.push(Intensity[Intensity.length-1][1]);
        }
    }
    
    
    if (Intensity[Intensity.length-1][1]=='Angry') {
        if (trial > 0) {
            if ((corrAns[corrAns.length-1] !== 'NA') && (Correctness.length > 1)) {
                if ((Correctness[Correctness.length-1]===0) && (Correctness[Correctness.length-2]===1) && (Correctness_Int[Correctness_Int.length-2] != 'Happy')) {
                    Reverse=Reverse+1;
                } else if ((Correctness[Correctness.length-1]===1) && (Correctness[Correctness.length-2]===0)) {
                    Reverse=Reverse+1;
                } else if ((Correctness[Correctness.length-1]===1) && (Correctness_Int[Correctness_Int.length-2]=='Happy')) {
                    Reverse=Reverse+1;
                }
            }
        }
    } else if (Intensity[Intensity.length-1][1]=='Happy') {
        if (trial > 0) {
            if ((corrAns[corrAns.length-1] !== 'NA') && (Correctness.length > 1)) {
                if ((Correctness[Correctness.length-1]===1) && (Correctness[Correctness.length-2]===0)) {
                    Reverse=Reverse+1;
                } else if ((Correctness[Correctness.length-1]===1) && (Correctness_Int[Correctness_Int.length-2]=='Angry')) {
                    Reverse=Reverse+1;
                } else if ((Correctness[Correctness.length-1]===0) && (Correctness[Correctness.length-2]===1) && (Correctness_Int[Correctness_Int.length-2] != 'Angry')) {
                    Reverse=Reverse+1;
                }
            }
        }
    }
    
    console.log('step before..  ',step);
    if (Reverse <= 5) {
        step=step_sizes[Reverse];
    } else {
        step=step_sizes[step_sizes.length-1];
    }
    console.log('step after..  ',step);
    
    console.log("before startVal..  ",startVal);
    
    if ((key_resp.keys === "left") || (key_resp.keys === "right")) {
        if (corrAns[corrAns.length-1] === 1) {
            if (Stimuli[startVal][1] == 'Angry') {
                startVal = startVal - step;
            } else if (Stimuli[startVal][1] == 'Happy') {
                startVal = startVal + step;
            }
        } else if (corrAns[corrAns.length-1] === 0) {
            if (Stimuli[startVal][1] == 'Angry') {
                if ((startVal + step) > 199) {
                    startVal = 199;
                } else {
                    startVal = startVal + step;
                }
            } else if (Stimuli[startVal][1] == 'Happy') {
                if ((startVal - step) < 0) {
                    startVal = 0;
                } else {
                    startVal = startVal - step;
                }
            }
        }
    }
    
    console.log("after startVal..  ",startVal);
    
    
    
    
    
    
    
    
    
    
    
    return Scheduler.Event.NEXT;
  };
}


var lateComponents;
function lateRoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'late'-------
    t = 0;
    lateClock.reset(); // clock
    frameN = -1;
    routineTimer.add(0.700000);
    // update component parameters for each repeat
    // keep track of which components have finished
    lateComponents = [];
    lateComponents.push(youweretoolate);
    
    lateComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    
    return Scheduler.Event.NEXT;
  };
}


function lateRoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'late'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = lateClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *youweretoolate* updates
    if (t >= 0.2 && youweretoolate.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      youweretoolate.tStart = t;  // (not accounting for frame time here)
      youweretoolate.frameNStart = frameN;  // exact frame index
      
      youweretoolate.setAutoDraw(true);
    }

    frameRemains = 0.2 + 0.5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (youweretoolate.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      youweretoolate.setAutoDraw(false);
    }
    if ((key_resp.keys !== "left") && (key_resp.keys !== "right")) {
        continueRoutine = true;
    }
    
    if ((key_sliderConf.keys === "space") || (sliderConf.getRating() !== undefined)) {
        continueRoutine = false;
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    lateComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function lateRoutineEnd(trials) {
  return function () {
    //------Ending Routine 'late'-------
    lateComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    return Scheduler.Event.NEXT;
  };
}


var _1_5Components;
function _1_5RoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine '_1_5'-------
    t = 0;
    _1_5Clock.reset(); // clock
    frameN = -1;
    routineTimer.add(1.500000);
    // update component parameters for each repeat
    psychoJS.experiment.addData("Stimulus", Stim);
    psychoJS.experiment.addData("Correctness", corrAns[corrAns.length-1]);
    psychoJS.experiment.addData("Reverse", Reverse);
    psychoJS.experiment.addData("StepSize", step);
    
    if (key_resp.keys === 'left') {
        psychoJS.experiment.addData('EmotResponse','Angry');
    } else if (key_resp.keys === 'right') {
        psychoJS.experiment.addData('EmotResponse','Happy');
    } else {
        psychoJS.experiment.addData('EmotResponse','NA');
    }
    
    psychoJS.experiment.addData("Gender", Gender[trial_G]);
    
    trial = trial + 1;
    
    if (corrAns[corrAns.length-1] != 'NA') {
        trial_G = trial_G + 1;
    }
    
    if (trial < 30) {
        Stimuli=eval("Stimuli_"+Gender[trial_G])
        Stim=Stimuli[startVal][0];
    }
    
    // keep track of which components have finished
    _1_5Components = [];
    _1_5Components.push(Blank);
    
    _1_5Components.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    
    return Scheduler.Event.NEXT;
  };
}


function _1_5RoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine '_1_5'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = _1_5Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    if (trial_G === 30) {
        continueRoutine = false; 
    }
    
    // *Blank* updates
    if (t >= 0.0 && Blank.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Blank.tStart = t;  // (not accounting for frame time here)
      Blank.frameNStart = frameN;  // exact frame index
      
      Blank.setAutoDraw(true);
    }

    frameRemains = 0.0 + 1.5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (Blank.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      Blank.setAutoDraw(false);
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    _1_5Components.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function _1_5RoutineEnd(trials) {
  return function () {
    //------Ending Routine '_1_5'-------
    _1_5Components.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    console.log('before sliderConf.getRating()..  ',sliderConf.getRating());
    console.log('after sliderConf.getRating()..  ',sliderConf.getRating());
    
    return Scheduler.Event.NEXT;
  };
}


var _Brk_key_resp_allKeys;
var BrkComponents;
function BrkRoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'Brk'-------
    t = 0;
    BrkClock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    function shuffle(arra1) {
        var ctr = arra1.length, temp, index;
        while (ctr > 0) {
            index = Math.floor(Math.random() * ctr);
            ctr--;
            temp = arra1[ctr];
            arra1[ctr] = arra1[index];
            arra1[index] = temp;
        }
        return arra1;
    }
    
    Emotion = Emotion + 1;
    trial = 0;
    trial_G = 0;
    
    Intensity = [];
    
    Reverse = 0;
    step=step_sizes[0];
    
    corrAns = [];
    
    Correctness = [];
    Correctness_Int = [];
    
    Gender = shuffle(Gender);
    
    
    if (Emotion < 2) {
        startVal = eval("startVal_" + Emot[Emotion]);
        Stim = Stimuli[startVal][0];
    }
    
    Brk_key_resp.keys = undefined;
    Brk_key_resp.rt = undefined;
    _Brk_key_resp_allKeys = [];
    // keep track of which components have finished
    BrkComponents = [];
    BrkComponents.push(Brk_text);
    BrkComponents.push(Brk_key_resp);
    
    BrkComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    
    return Scheduler.Event.NEXT;
  };
}


function BrkRoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'Brk'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = BrkClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    if (Emotion === 2) {
        continueRoutine = false;
    }
    
    
    // *Brk_text* updates
    if (t >= 0.0 && Brk_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Brk_text.tStart = t;  // (not accounting for frame time here)
      Brk_text.frameNStart = frameN;  // exact frame index
      
      Brk_text.setAutoDraw(true);
    }

    
    // *Brk_key_resp* updates
    if (t >= 0.0 && Brk_key_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Brk_key_resp.tStart = t;  // (not accounting for frame time here)
      Brk_key_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { Brk_key_resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { Brk_key_resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { Brk_key_resp.clearEvents(); });
    }

    if (Brk_key_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = Brk_key_resp.getKeys({keyList: ['space'], waitRelease: false});
      _Brk_key_resp_allKeys = _Brk_key_resp_allKeys.concat(theseKeys);
      if (_Brk_key_resp_allKeys.length > 0) {
        Brk_key_resp.keys = _Brk_key_resp_allKeys[_Brk_key_resp_allKeys.length - 1].name;  // just the last key pressed
        Brk_key_resp.rt = _Brk_key_resp_allKeys[_Brk_key_resp_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    BrkComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function BrkRoutineEnd(trials) {
  return function () {
    //------Ending Routine 'Brk'-------
    BrkComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('Brk_key_resp.keys', Brk_key_resp.keys);
    if (typeof Brk_key_resp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('Brk_key_resp.rt', Brk_key_resp.rt);
        routineTimer.reset();
        }
    
    Brk_key_resp.stop();
    // the Routine "Brk" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _End_key_resp_allKeys;
var EndComponents;
function EndRoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'End'-------
    t = 0;
    EndClock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    End_key_resp.keys = undefined;
    End_key_resp.rt = undefined;
    _End_key_resp_allKeys = [];
    // keep track of which components have finished
    EndComponents = [];
    EndComponents.push(End_txt);
    EndComponents.push(End_key_resp);
    
    EndComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    
    return Scheduler.Event.NEXT;
  };
}


function EndRoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'End'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = EndClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *End_txt* updates
    if (t >= 0.0 && End_txt.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      End_txt.tStart = t;  // (not accounting for frame time here)
      End_txt.frameNStart = frameN;  // exact frame index
      
      End_txt.setAutoDraw(true);
    }

    
    // *End_key_resp* updates
    if (t >= 0.0 && End_key_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      End_key_resp.tStart = t;  // (not accounting for frame time here)
      End_key_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { End_key_resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { End_key_resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { End_key_resp.clearEvents(); });
    }

    if (End_key_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = End_key_resp.getKeys({keyList: ['space'], waitRelease: false});
      _End_key_resp_allKeys = _End_key_resp_allKeys.concat(theseKeys);
      if (_End_key_resp_allKeys.length > 0) {
        End_key_resp.keys = _End_key_resp_allKeys[_End_key_resp_allKeys.length - 1].name;  // just the last key pressed
        End_key_resp.rt = _End_key_resp_allKeys[_End_key_resp_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    EndComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function EndRoutineEnd(trials) {
  return function () {
    //------Ending Routine 'End'-------
    EndComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('End_key_resp.keys', End_key_resp.keys);
    if (typeof End_key_resp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('End_key_resp.rt', End_key_resp.rt);
        routineTimer.reset();
        }
    
    End_key_resp.stop();
    // the Routine "End" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


function endLoopIteration(thisScheduler, loop) {
  // ------Prepare for next entry------
  return function () {
    if (typeof loop !== 'undefined') {
      // ------Check if user ended loop early------
      if (loop.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(loop);
        }
      thisScheduler.stop();
      } else {
        const thisTrial = loop.getCurrentTrial();
        if (typeof thisTrial === 'undefined' || !('isTrials' in thisTrial) || thisTrial.isTrials) {
          psychoJS.experiment.nextEntry(loop);
        }
      }
    return Scheduler.Event.NEXT;
    }
  };
}


function importConditions(trials) {
  return function () {
    psychoJS.importAttributes(trials.getCurrentTrial());
    return Scheduler.Event.NEXT;
    };
}


function quitPsychoJS(message, isCompleted) {
  // Check for and save orphaned data
  if (psychoJS.experiment.isEntryEmpty()) {
    psychoJS.experiment.nextEntry();
  }
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  psychoJS.window.close();
  psychoJS.quit({message: message, isCompleted: isCompleted});
  
  return Scheduler.Event.QUIT;
}
