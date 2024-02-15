const mysql = require('mysql2');  // Import mysql module
const dbconfig = require('./config/db_config.json'); // Import dbconfig.json file

// 데이터베이스 연결 설정
const connection = mysql.createConnection(dbconfig); 

// 데이터베이스 연결
connection.connect();

// 데이터 삽입
sql = 'INSERT INTO usertbl VALUES ("BBB", "홍길동", 2001, "강원", null, null, 185, "2024-02-08")';
connection.query(sql, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log('삽입 성공~~');
  }
});

// 데이터 조회

connection.query('SELECT * FROM usertbl', function (error, rows, fields) {
  // 에러 발생 시 발생한 에러를 thow
  if (error) throw error;
  //조회된 데이터 출력
  console.log('전체: ', rows);
  console.log('첫번째: ', rows[0]);
  console.log('마지막: ', rows[rows.length-1]);
  console.log('첫번째 사람: ',rows[0]['name']); // 첫번째 데이터의 이름 출력

});


// 데이터베이스 연결 종료
connection.end();











