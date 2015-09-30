FROM node:0.12
ENV PWD /root
COPY . /root/
RUN cd /root/; npm install
CMD ["node", "/root/index.js"]
