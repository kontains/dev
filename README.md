
<!-- PROJECT LOGO -->
<div align="center">
  <h1 align="center">dev assistant</h1>
</div>

# Installation

## Prerequisites

- `node.js` and `npm`

- `pipx`, if you don't have this go [here](https://pipx.pypa.io/stable/installation/)

- API Key <samp>(just one is required)</samp>
   - [**Anthropic**](https://console.anthropic.com/settings/keys)
    - [**OpenAI**](https://platform.openai.com/api-keys)
    - [**Groq**](https://console.groq.com/keys) (not released in package yet, run locally)

- Checking Windows support.

## Installation commands

To install, simply run:

```bash
curl -sSL https://raw.githubusercontent.com/entropy-research/Devon/main/install.sh | bash
```

** Or to install using `pip` + `npm`:*

```bash
pip install devon_agent
npm install -g devon-tui 
```

This installs the Python backend, and the cli command to run the tool.

# Running the agent
Navigate to your project folder and open the terminal.

Set your Anthropic API or OpenAI API key as an environment variable.

> Don't worry, the agent will be able to only access files and folders in the directory you started it from. You can also correct it while it's performing actions.

To run in *debug* mode, the command is:
```bash
devon --debug
```

For a list of all commands available:
```bash
devon --help
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
