drop table if exists test1;
create table test1(
    id bigint unsigned not null default '0',
    rnd int unsigned not null default '0',
    str varchar(100) not null default ''
) engine=Innodb comment='';
