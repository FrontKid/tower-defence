function displayInTerminal(string: string) {
  return process.stdout.write(`${string}\n`)
}

export { displayInTerminal };