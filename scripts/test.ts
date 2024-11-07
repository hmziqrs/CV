import { parseArgs } from "util";
import server from "http-server";

async function main() {
  try {
    const { values } = parseArgs({
      args: process.argv,
      strict: false,
      options: {
        env: {
          type: "string",
        },
      },
    });

    server
      .createServer({
        root: "out",
      })
      .listen(8899);

    await new Promise((resolve) => setTimeout(resolve, 20000));

    console.log("Hello, World!", values);
    console.log(process.argv);
  } catch (e) {
    console.error("FAILED TO get snapshot");
    console.error(e);
    process.exit(1);
  }
}

main();
