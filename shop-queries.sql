CREATE DATABASE db_clothes;
CREATE TABLE db_clothes.Customers (
    Id int AUTO_INCREMENT PRIMARY KEY NOT NULL,
	FirstName varchar(30) NOT NULL,
    LastName varchar(30) NOT NULL,
    CPF varchar(11) NOT NULL,
    Address varchar(40) NOT NULL,
    BirthDate DATE NOT NULL,
    Email varchar(254) NOT NULL,
    Password varchar(16) NOT NULL
);
DROP TABLE db_clothes.Customers;

SELECT * FROM db_clothes.Customers WHERE Email = 'didi@' AND Password = '1234';
SELECT * FROM db_clothes.Customers;
SELECT * FROM db_clothes.Products;

INSERT INTO db_clothes.Products (Name, Quantity, ImagePath,Price,category) VALUES ('RELOWA SHIRT',5,'MTS949_B_01.jpg',424.79,'CAMISAS');
INSERT INTO db_clothes.Products (Name, Quantity, ImagePath,Price,category) VALUES ('DELO POLO',5,'MTS840_D_01.jpg',39.90,'CAMISAS');
INSERT INTO db_clothes.Products (Name, Quantity, ImagePath,Price,category) VALUES ('HILLSBORO SHIRT',5,'MTS732_H_01.jpg',24.79,'CAMISAS');
INSERT INTO db_clothes.Products (Name, Quantity, ImagePath,Price,category) VALUES ('TAHUPO SHIRT',5,'MTS900_A_01.jpg',79.10,'CAMISAS');

INSERT INTO db_clothes.Products (Name, Quantity, ImagePath,Price,category) VALUES ('PARKER EMBOSS',5,'MVT400_B_01.jpg',247.79,'CASACOS');
INSERT INTO db_clothes.Products (Name, Quantity, ImagePath,Price,category) VALUES ('TAKYSI 1/4 ZIP',5,'MSW359_A_01.jpg',127.90,'CASACOS');
INSERT INTO db_clothes.Products (Name, Quantity, ImagePath,Price,category) VALUES ('WWF CREW M',5,'MSW335_A_01.jpg',789.17,'CASACOS');
INSERT INTO db_clothes.Products (Name, Quantity, ImagePath,Price,category) VALUES ('PEMBERTON ZIP',5,'MSW355_B_01.jpg',245.10,'CASACOS');

INSERT INTO db_clothes.Products (Name, Quantity, ImagePath,Price,category) VALUES ('NOREWA PANTS',5,'MJS060_B_01.jpg',249.79,'CALCAS');
INSERT INTO db_clothes.Products (Name, Quantity, ImagePath,Price,category) VALUES ('RIMS PANTS',5,'MJS059_A_02.jpg',137.90,'CALCAS');
INSERT INTO db_clothes.Products (Name, Quantity, ImagePath,Price,category) VALUES ('CHILL PANTS',5,'MJJ070_C_01.jpg',280.79,'CALCAS');
INSERT INTO db_clothes.Products (Name, Quantity, ImagePath,Price,category) VALUES ('JEGOW PANTS',5,'MJJ067_C_01.jpg',157.10,'CALCAS');



INSERT INTO db_clothes.customers (FirstName, LastName, CPF, Address, BirthDate, Email, Password) VALUES ('$fname','$lname','$cpf','$address','$bDate','$email','$password');

CREATE TABLE db_clothes.Products (
    Id int AUTO_INCREMENT PRIMARY KEY NOT NULL,
	Name varchar(30),
    Quantity varchar(30),
    ImagePath varchar(50),
    Price float,
    Category varchar(30)
);

DROP TABLE db_clothes.Products;

CREATE TABLE db_clothes.Cart (
    Id_produto int NOT NULL,
    Id_customer int NOT NULL,
    Quantity int,
    FOREIGN KEY (Id_produto) REFERENCES Products(Id),
	FOREIGN KEY (Id_customer) REFERENCES Customers(Id)
);

SELECT * FROM db_clothes.Cart;
DROP TABLE db_clothes.Cart;

CREATE TABLE db_clothes.Reviews (
	Id int AUTO_INCREMENT PRIMARY KEY NOT NULL,
	Nome varchar(30),
    Comentario varchar(500),
    Foto varchar(30)
);
INSERT INTO db_clothes.Reviews(Nome, Comentario) VALUES("Lucas inutison", "“adorei comprar nesta loja! uau :P gostei tanto que vou lançar um poema: Pellentesque ultricies, lectus nec auctor interdum, urna dui luctus libero, id tempor libero lectus ut sapien. Sed eu venenatis ipsum. Proin enim turpis, placerat feugiat enim id, posuere hendrerit erat. Morbi vestibulum semper imperdiet. Fusce vel vestibulum arcu. Fusce id fermentum lectus. Nulla eu telles”");
INSERT INTO db_clothes.Reviews(Nome, Comentario) VALUES("Lucas inutison", "");


DROP TABLE db_clothes.Reviews;

CREATE TABLE db_clothes.Compras (
	Id int AUTO_INCREMENT PRIMARY KEY NOT NULL,
	TipoPagamento varchar(20),
    Usuario varchar(20),
    ValorTotal float,
    dataCompra date    
);

SELECT * FROM db_clothes.Compras;


DROP TABLE db_clothes.Compras;
