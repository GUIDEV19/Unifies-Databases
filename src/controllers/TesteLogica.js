const conexao1  = require('../db.js')
const conexao2 = require('../dbUnificar.js')


async function migraPaciente(){
    const unificar = await conexao2
    const zscan_database = await conexao1

    //Migrando Tabela de contatos
    const [pacientesUnificar] = await unificar.query(`select * from  tb_ptts as a inner join tb_cnts as b on a.ptts_cnts = b.cnts_code;`)

    for(var i = 0; i < pacientesUnificar.length; i++){
        console.log('passei: ' + i)
        console.log(pacientesUnificar[i].cnts_dhcr)
        let formt_dhcr = await formataData(pacientesUnificar[i].cnts_dhcr) 
        console.log(formt_dhcr)
        let formt_dhcg = await formataData(pacientesUnificar[i].cnts_dhcg)

        await zscan_database.query(`insert into tb_cnts (cnts_phn1, cnts_phn2, cnts_cel1, cnts_cel2, cnts_eml1, cnts_eml2, cnts_site, cnts_adpp, cnts_adst, cnts_adnr, cnts_adnh, cnts_adzc, cnts_city, cnts_dhcr, cnts_dhcg, cnts_dhdl ) value (
            '${pacientesUnificar[i].cnts_phn1}',
            '${pacientesUnificar[i].cnts_phn2}',
            '${pacientesUnificar[i].cnts_cel1}',
            '${pacientesUnificar[i].cnts_cel2}',
            '${pacientesUnificar[i].cnts_eml1}',
            '${pacientesUnificar[i].cnts_eml2}',
            '${pacientesUnificar[i].cnts_site}',
            '${pacientesUnificar[i].cnts_adpp}',
            '${pacientesUnificar[i].cnts_adst}',
            '${pacientesUnificar[i].cnts_adnr}',
            '${pacientesUnificar[i].cnts_adnh}',
            '${pacientesUnificar[i].cnts_adzc}',
            ${pacientesUnificar[i].cnts_city},
            '${formt_dhcr}',
            '${formt_dhcg}',
            ${pacientesUnificar[i].cnts_dhdl}
        )`) 
        //selecionando ultimo ID de contatos  inserido dentro do banco de dados.
        const [cnts_id] = await zscan_database.query('SELECT cnts_code FROM tb_cnts ORDER BY cnts_code desc limit 1;')
         //Migrando tabela de pacientes
        const format_ptts_dhcr = formataData(pacientesUnificar[i].ptts_dhcr)
        const format_ptts_dhcg = formataData(pacientesUnificar[i].ptts_dhcg)
        await zscan_database.query(`insert into tb_ptts (ptts_fnme, ptts_mnme, ptts_lnme, ptts_mtnm, ptts_ftnm, ptts_cnts, ptts_ocps, ptts_brdt, ptts_gndr, ptts_mrst, ptts_phto, ptts_ntly, ptts_scho, ptts_dfhp, ptts_ucrt, ptts_uchd, ptts_udlt, ptts_reqs, ptts_dhcr, ptts_dhcg, ptts_dhdl) value (
            '${pacientesUnificar[i].ptts_fnme}',
            '${pacientesUnificar[i].ptts_mnme}',
            '${pacientesUnificar[i].ptts_lnme}',
            'Generic',
            null,
            ${cnts_id[0].cnts_code},
            ${pacientesUnificar[i].ptts_ocps},
            '${pacientesUnificar[i].ptts_brdt}',
            ${pacientesUnificar[i].ptts_gndr},
            ${pacientesUnificar[i].ptts_mrst},
            '${pacientesUnificar[i].ptts_phto}',
            '${pacientesUnificar[i].ptts_ntly}',
            ${pacientesUnificar[i].ptts_scho},
            ${pacientesUnificar[i].ptts_dfhp},
            ${pacientesUnificar[i].ptts_ucrt},
            ${pacientesUnificar[i].ptts_uchd},
            ${pacientesUnificar[i].ptts_udlt},
            null,
            '${format_ptts_dhcr}',
            '${format_ptts_dhcg}',
            null
        );`) 
        
        const [idpaciente] = await zscan_database.query(`SELECT ptts_code FROM tb_ptts ORDER BY ptts_code desc limit 1;`)
        //Migrando a tabela de Documentos

        const [tb_docs] = await unificar.query(`select * from ptts_has_docs as a inner join tb_docs as b on a.docs_code = b.docs_code where a.ptts_code = ${pacientesUnificar[i].ptts_code}`)
        
        const format_docs_dhcr = formataData(tb_docs[0].docs_dhcr)
        const format_docs_dhcg = formataData(tb_docs[0].docs_dhcg)
        
        await zscan_database.query(`insert into tb_docs (docs_type, docs_numb, docs_extr, docs_dhcr, docs_dhcg, docs_dhdl) values (
            ${tb_docs[0].docs_type},
            '${tb_docs[0].docs_numb}',
            ${tb_docs[0].docs_extr},
            '${format_docs_dhcr}',
            '${format_docs_dhcg}',
            null
        ); `) 
            //selecionando o Ultimo ID de domento inserido dentro da database.
        const [idDocs] = await zscan_database.query(`select docs_code from tb_docs ORDER BY docs_code desc limit 1;`) 
            //relacionando Documentos com pacientes
        await zscan_database.query(`insert into ptts_has_docs (ptts_code, docs_code) values (
            ${idpaciente[0].ptts_code},
            ${idDocs[0].docs_code}
        );`); 

        const [tb_exam_tb_ptlt] = await unificar.query(`select * from tb_tplt as a inner join tb_exam as b on b.exam_tplt = a.tplt_code;`)
        if(i < tb_exam_tb_ptlt.length){
            let format_tplt_dhcr = formataData(tb_exam_tb_ptlt[i].tplt_dhcr)
            let format_tplt_dhcg = formataData(tb_exam_tb_ptlt[i].tplt_dhcg)
            await zscan_database.query(`insert into tb_tplt (tplt_name,tplt_ftst,tplt_ftsz,tplt_ffst,tplt_ffsz,tplt_algn,tplt_ortn,tplt_size,tplt_mtop,tplt_mrgt,tplt_mbtm,tplt_mlft,tplt_stit,tplt_spid,tplt_sptt,tplt_spdc,tplt_spbd,tplt_spag,tplt_sptg,tplt_spta,tplt_srpi,tplt_sdoc,tplt_shlp,tplt_srqt,tplt_sasn,tplt_tchn,tplt_anth,tplt_seqp,tplt_sdat,tplt_sdex,tplt_sdrr,tplt_sels,tplt_sdgn,tplt_shde,tplt_shpf,tplt_shri,tplt_rinm,tplt_ssgn,tplt_scsg,tplt_sstx,tplt_slbi,tplt_hsec,tplt_fsec,tplt_limg,tplt_linf,tplt_lifo,tplt_amnt,tplt_lang,tplt_ucrt,tplt_uchd,tplt_udlt,tplt_dhcr,tplt_dhcg,tplt_dhdl) values (
                '${tb_exam_tb_ptlt[i].tplt_name}',
                '${tb_exam_tb_ptlt[i].tplt_ftst}',
                ${tb_exam_tb_ptlt[i].tplt_ftsz},
                '${tb_exam_tb_ptlt[i].tplt_ffst}',
                ${tb_exam_tb_ptlt[i].tplt_ffsz},
                '${tb_exam_tb_ptlt[i].tplt_algn}',
                '${tb_exam_tb_ptlt[i].tplt_ortn}',
                '${tb_exam_tb_ptlt[i].tplt_size}',
                ${tb_exam_tb_ptlt[i].tplt_mtop},
                ${tb_exam_tb_ptlt[i].tplt_mrgt},
                ${tb_exam_tb_ptlt[i].tplt_mbtm},
                ${tb_exam_tb_ptlt[i].tplt_mlft},
                ${tb_exam_tb_ptlt[i].tplt_stit},
                ${tb_exam_tb_ptlt[i].tplt_spid},
                ${tb_exam_tb_ptlt[i].tplt_sptt},
                ${tb_exam_tb_ptlt[i].tplt_spdc},
                ${tb_exam_tb_ptlt[i].tplt_spbd},
                ${tb_exam_tb_ptlt[i].tplt_spag},
                ${tb_exam_tb_ptlt[i].tplt_sptg},
                ${tb_exam_tb_ptlt[i].tplt_spta},
                ${tb_exam_tb_ptlt[i].tplt_srpi},
                ${tb_exam_tb_ptlt[i].tplt_sdoc},
                ${tb_exam_tb_ptlt[i].tplt_shlp},
                ${tb_exam_tb_ptlt[i].tplt_srqt},
                ${tb_exam_tb_ptlt[i].tplt_sasn},
                ${tb_exam_tb_ptlt[i].tplt_tchn},
                ${tb_exam_tb_ptlt[i].tplt_anth},
                ${tb_exam_tb_ptlt[i].tplt_seqp},
                ${tb_exam_tb_ptlt[i].tplt_sdat},
                ${tb_exam_tb_ptlt[i].tplt_sdex},
                ${tb_exam_tb_ptlt[i].tplt_sdrr},
                ${tb_exam_tb_ptlt[i].tplt_sels},
                ${tb_exam_tb_ptlt[i].tplt_sdgn},
                ${tb_exam_tb_ptlt[i].tplt_shde},
                ${tb_exam_tb_ptlt[i].tplt_shpf},
                ${tb_exam_tb_ptlt[i].tplt_shri},
                '${tb_exam_tb_ptlt[i].tplt_rinm}',
                ${tb_exam_tb_ptlt[i].tplt_ssgn},
                ${tb_exam_tb_ptlt[i].tplt_scsg},
                ${tb_exam_tb_ptlt[i].tplt_scsg},
                ${tb_exam_tb_ptlt[i].tplt_sstx},
                1,
                2,
                3,
                ${tb_exam_tb_ptlt[i].tplt_limg},
                null,
                ${tb_exam_tb_ptlt[i].tplt_amnt},
                '${tb_exam_tb_ptlt[i].tplt_lang}',
                ${tb_exam_tb_ptlt[i].tplt_ucrt},
                ${tb_exam_tb_ptlt[i].tplt_uchd},
                ${tb_exam_tb_ptlt[i].tplt_udlt},
                '${format_tplt_dhcr}',
                '${format_tplt_dhcg}',
                null
            );`) 
        }
        const [idtplt] = await zscan_database.query(`select tplt_code from tb_tplt ORDER BY tplt_code desc limit 1;`)
        const [tb_exam] = await unificar.query(`select * from tb_exam;`)
        if(i < tb_exam.length){
            let format_exam_dhcr =  formataData(tb_exam_tb_ptlt[i].exam_dhcr)
            let format_exam_dhcg = formataData(tb_exam_tb_ptlt[i].exam_dhcg)
            await zscan_database.query(`insert into tb_exam (exam_name, exam_titl, exam_tplt, exam_lang, exam_actv, exam_ucrt, exam_uchd, exam_udlt, exam_dhcr, exam_dhcg, exam_dhdl) values (
                '${tb_exam_tb_ptlt[i].exam_name}',
                '${tb_exam_tb_ptlt[i].exam_titl}',
                ${idtplt[0].tplt_code},
                '${tb_exam_tb_ptlt[i].exam_lang}',
                0,
                ${tb_exam_tb_ptlt[i].exam_ucrt},
                ${tb_exam_tb_ptlt[i].exam_uchd},
                ${tb_exam_tb_ptlt[i].exam_udlt},
                '${format_exam_dhcr}',
                '${format_exam_dhcg}',
                null
            );`)
        } 
        
    }
}



migraPaciente() 




function formataData(date){
    
    let data = date 
    let ajustaMes = `${data.getMonth()}-${data.getDate()}`


    if(ajustaMes == '2-29' || ajustaMes == '2-30' || ajustaMes == '2-31'){
        let format =  `${data.getFullYear()}-${data.getMonth()}-28 ${data.getHours()}:${data.getMinutes()}:${data.getSeconds()}`
        return format
    }else if(data.getMonth() == '0'){
        let format =  `${data.getFullYear()}-1-${data.getDate()} ${data.getHours()}:${data.getMinutes()}:${data.getSeconds()}`
        return format
    }else if(ajustaMes == '11-31'){
        let format =  `${data.getFullYear()}-${data.getMonth()}-30 ${data.getHours()}:${data.getMinutes()}:${data.getSeconds()}`
        return format
    }
    else{
        let format =  `${data.getFullYear()}-${data.getMonth()}-${data.getDate()} ${data.getHours()}:${data.getMinutes()}:${data.getSeconds()}`
        return format
    }
    
} 