FROM denoland/deno:alpine-2.0.2

WORKDIR /app

COPY package.json deno.lock ./

RUN DENO_FUTURE=1 
RUN deno install --allow-scripts

COPY . .

CMD [ "run", "dev", "--host"]