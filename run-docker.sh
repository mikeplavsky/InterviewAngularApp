docker run -d -v $(pwd)/simpleApp:/app/simpleApp -w /app/simpleApp -p 8888:4200 patico/ngapp ng serve
