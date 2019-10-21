CREATE TABLE d14_projetos_exploracao (

d14_cdempresa BIGINT,
d14_cdprojeto BIGSERIAL,
d14_nmprojeto VARCHAR(100),
d14_localizacao VARCHAR(100),
d14_txobservacao VARCHAR(100),

PRIMARY KEY (d14_cdprojeto),
FOREIGN KEY (d14_cdempresa) REFERENCES d13_empresa(d13_cdempresa)
);

CREATE TABLE d15_unidade_produção_anual (


d15_cdprojeto BIGINT,
d15_cdupa BIGSERIAL,
d15_ano VARCHAR(100),

PRIMARY KEY (d15_cdupa),
FOREIGN KEY (d15_cdprojeto) REFERENCES d14_projetos_exploracao(d14_cdprojeto)
);


CREATE TABLE d16_unidade_de_trabalho (

d16_cdupa BIGINT,
d16_cdut BIGSERIAL,
d16_ut BIGINT,

PRIMARY KEY (d16_cdut),
FOREIGN KEY (d16_cdupa) REFERENCES d15_unidade_produção_anual(d15_cdupa)
);