create table message(
    id int not null AUTO_INCREMENT,
    name varchar(50) not null,
    email varchar(100) not null,
    phone varchar(30) not null,
    city varchar(50) not null,
    date_start date not null,
    date_end date not null,
    message_user varchar(255) null,
    PRIMARY KEY (id)
)ENGINE = InnoDB
CHARACTER SET latin1 COLLATE latin1_spanish_ci;