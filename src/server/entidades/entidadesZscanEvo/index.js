const migrationPtts = require('./tb_ptts.js');
const migrationCnts = require('./tb_cnts.js');
const migrationDocs = require('./tb_docs.js');
const migrationptts_has_docs = require('./ptts_has_docs.js');
const migrationTplt = require('./tb_tplt.js');
const migrationExam = require('./tb_exam.js');
const migrationDvcs = require('./tb_dvcs.js');
const migrationEmps = require('./tb_emps.js');
const migrationRprt = require('./tb_rprt.js');
const migrationImgs = require('./tb_imgs.js');

module.exports = {
    migrationPtts,
    migrationCnts,
    migrationDocs,
    migrationptts_has_docs,
    migrationTplt,
    migrationExam,
    migrationDvcs,
    migrationEmps,
    migrationRprt,
    migrationImgs
}