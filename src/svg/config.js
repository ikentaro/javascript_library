import setPaper from './config/setPaper.js'

const config={
    paper: null,
    setPaper: (elem)=>{ return setPaper(config, elem); }
};

export default config;
