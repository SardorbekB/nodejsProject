// nodejs da core module os ni import qilamiz!
const os = require('os');

//Operativ xotira bo'sh qismini olish baytlarda!
const freeMem = os.freemem();
console.log(freeMem);

//Operativ xotiraning umumiy qiymati baytlarda!
const totalMem = os.totalmem();
console.log(totalMem);

//Foydalanuvchi haqida ma`lumot olish!
const userInfo = os.userInfo();
console.log(userInfo);

//Operatsion sistemaning qanchadan buyon ishlayotgani sekundlarda!
const upTime = os.uptime();
console.log(upTime);

//Operatsion sistema versiyasi!
const Version = os.version();
console.log(Version);

//Os turi!
const Type = os.type();
console.log(Type);

//os joylashgan papka!
const tmDir = os.tmpdir();
console.log(tmDir);

//os arxitekturasi!
const Arch = os.arch();
console.log(Arch);

//Bazi xossalari!
const Cpus = os.cpus();
console.log(Cpus);
//
const endiAnness = os.endianness();
console.log(endiAnness);
//
const priority = os.getPriority();
console.log(priority);

//home dir
const homeDir = os.homedir();
console.log(homeDir);

//hostName
const hostName = os.hostname();
console.log(hostName);

//
const loadAvg = os.loadavg();
console.log(loadAvg);

//
const interFase = os.networkInterfaces();
console.log(interFase);

//
const platForm = os.platform();
console.log(platForm);

//
const releAse = os.release();
console.log(releAse);