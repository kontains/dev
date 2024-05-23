
<!-- PROJECT LOGO -->
<div align="center">
  <h1 align="center">dev assistant</h1>
</div>

# Windows Installation

## Prerequisites

- `node.js`, `npm`, and `pip`  (checking Windows support)

## Instal

** Or to install using `pip` + `npm`:*

```bash
pip install devon_agent
npm install -g devon-tui 
```

This installs the Python backend, and the cli command to run the tool.

# Running the agent

> "Don't worry, the agent will be able to only access files and folders in the directory you started it from. You can also correct it while it's performing actions."

## Note:  "event type (i.e. "tool call") and failure telemetry to solve bugs and improve the user experience"
To disable telemetry, set the environment variable `DEVON_TELEMETRY_DISABLED` to `true` 

```bash
export DEVON_TELEMETRY_DISABLED=true
```

Run in *local* mode:  [!WARNING]

> The current version of local model support is not mature, proceed with caution, and expect the performance to degrade significantly compared to the other options.

1. Get deepseek running with [ollama](https://ollama.com/library/deepseek-coder:6.7b)

2. Start the local ollama server by running
```
ollama run deepseek-coder:6.7b
```

4. Then configure devon to use the model
```bash
devon configure

Configuring Devon CLI...
? Select the model name: 
  claude-opus 
  gpt4-o 
  llama-3-70b 
❯ ollama/deepseek-coder:6.7b
```

4. And finally, run it with:
```
devon --api_key=FOSS
```

For a list of all commands available:
```bash
devon --help
```

To run in *debug* mode, the command is:
```bash
devon --debug
```

# Features
- Multi-file editing
- Codebase exploration
- Config writing
- Test writing
- Bug fixing
- Architecture exploration

### Limitations
- Minimal functionality for non-Python languages
- Sometimes have to specify the file where you want the change to happen

# Progress

## Current development priorities

1. Improve context gathering and code indexing abilities ex:
    - Adding memory modules
    - Improved code indexing
2. Add alternative models and agents to:
    - a) Reduce end user cost and
    - b) Reduce end user latency
3. Introduce Electron app and new UI



# License

Distributed under the Apache 2.0 License. See [`LICENSE`](./LICENSE) for more information.
