import { parseArgs } from "util";

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

    console.log("Hello, World!", values);
    console.log(process.argv);
  } catch (e) {
    console.error("FAILED TO get snapshot");
    console.error(e);
    process.exit(1);
  }
}

main();
