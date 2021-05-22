FROM ubuntu
RUN apt-get update && apt-get install nodejs npm -y
RUN mkdir -p /node_app
RUN touch /node_app/app.js /node_app/package.json /node_app/test.js
WORKDIR /node_app
COPY app.js /node_app/app.js
COPY package.json /node_app/package.json
COPY test.js /node_app/test.js
EXPOSE 3000
CMD ["/bin/bash"]
