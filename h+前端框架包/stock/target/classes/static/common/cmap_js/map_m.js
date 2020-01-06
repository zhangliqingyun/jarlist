function m_mqi_(id, sif01, sif02, sif03, sif05, vpos, lpos, pqi, pci, rqi, rdi, sri, pssi, aadt, yhfa, gps, amqi) { 
   //起始编码01 
    this.id = id;
    this.sif01 = sif01;
    this.sif02 = sif02;
    this.sif03 = sif03;
    this.sif05 = sif05;
    this.vpos = vpos;
    this.lpos = lpos;
    this.pqi = pqi;
    this.pci = pci;
    this.rqi = rqi;
    this.rdi = rdi;
    this.sri = sri;
    this.pssi = pssi;
    this.aadt = aadt;
    this.yhfa = yhfa;
    this.gps = gps;
    this.amqi = amqi;
}
function m_line_(id, aname, atext, apts, acolor, awidth) {
    //起始编码02
    this.id = id;
    this.aname = aname;
    this.atext = atext;
    this.apts = apts;
    this.acolor = acolor;
    this.awidth = awidth;
}
function m_piont_(id, aname, atext, apt, acolor, aheight, awidth, astyls) {
    //起始编码03 
    this.id = id;
    this.aname = aname;
    this.atext = atext;
    this.apt = apt;
    this.acolor = acolor;
    this.aheight = aheight;
    this.awidth = awidth;
    this.astyls = astyls;
}
function m_poly_(id, aname, atext, apts, acolor1, acolor2, awidth) {
    //起始编码04
    this.id = id;
    this.aname = aname;
    this.atext = atext;
    this.apts = apts;
    this.acolor1 = acolor1;
    this.acolor2 = acolor2;
    this.awidth = awidth;
}