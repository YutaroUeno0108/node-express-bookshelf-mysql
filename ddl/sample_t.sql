drop table if exists sample_t;
create table sample_t (
  sample_id BIGINT UNSIGNED,
  sample_name VARCHAR(1000),
  PRIMARY KEY (sample_id)
)ENGINE=InnoDB Default CHARSET=utf8;
