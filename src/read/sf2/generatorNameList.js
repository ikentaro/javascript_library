const generatorNameList=[
    "start_addrs_offset",
    "end_addrs_offset",
    "start_loop_addrs_offset",
    "end_loop_addrs_offset",
    "start_addrs_coarse",
    "mod_flo_to_pitch",
    "viv_flo_to_pitch",
    "vib_env_to_pitch",
    "init_filter_Fc",
    "init_filter_Q",
    "mod_flo_to_filter_Fc",      // [10]
    "mod_env_to_filter_Fc",
    "end_addrs_coarse_offset",
    "mod_flo_to_volume",
    "unused1",                   // reserved
    "chouse_effect_send",
    "reverb_effect_send",
    "pan",
    "unused2",                   // reserved
    "unused3",                   // reserved
    "unused4",                   // reserved [20]
    "decay_mod_flo",
    "freq_mod_flo",
    "delay_vib_flo",
    "freq_viv_flo",
    "delay_mod_env",
    "attack_mod_env",
    "hold_mod_env",
    "decay_mod_env",
    "sustain_mod_env",
    "release_mod_env",           // [30]
    "keynum_to_mod_env_hold",
    "keynum_to_mod_env_decay",
    "delay_vol_env",
    "attack_vol_env",
    "hold_vol_env",
    "decay_vol_env",
    "sustain_vol_env",
    "release_vol_env",
    "keynum_to_vol_env_hold",
    "keynum_to_vol_env_decay",   // [40] 
    "instrument",
    "reserved1",                 // reserved
    "key_range",
    "vel_range",
    "start_loop_addrs_coarse_offset",
    "keynum",
    "velocity",
    "init_attenuation",
    "reserved2",                 // reserved
    "end_loop_addrs_coarse_offset", // [50]
    "coarse_tune",
    "fine_tune",
    "sample_id",
    "sample_modes",
    "reserved3",                 // reserved
    "scale_tuning",
    "exclusive_class",
    "overriding_root_key",
    "unused5",                   // reserved
    "end_oper"                   // [60]
];

export default generatorNameList;
