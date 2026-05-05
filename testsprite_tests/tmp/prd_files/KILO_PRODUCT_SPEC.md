# Kilo CLI - Product Specification

## Overview

Kilo is an interactive command-line interface tool that acts as an AI-powered software engineering assistant. It integrates directly into developers' workflows, helping them write, review, and understand code through natural language conversations while maintaining full awareness of their local codebase.

## Purpose

Kilo bridges the gap between traditional CLI tools and modern AI assistants by:
- Providing context-aware coding assistance within the terminal
- Maintaining project-specific knowledge and conventions
- Enabling natural language interaction with codebases
- Streamlining common software engineering tasks without leaving the command line

## Core Features

### 1. Code Intelligence
- Semantic code search across entire projects
- Function/class definition lookup
- Cross-file reference tracking
- Automatic detection of project structure and patterns

### 2. Conversational Coding Assistant
- Natural language queries about code
- Code generation based on prompts
- Refactoring suggestions
- Bug identification and fixes
- Code reviews and best practice recommendations

### 3. File Operations
- Read, edit, and write files with AI assistance
- Smart file discovery using glob patterns
- Context-aware code modifications
- Batch operations across multiple files

### 4. Command Execution
- Safe shell command execution
- Pre-execution permission checks
- Protection against destructive operations
- Capture and analyze command output

### 5. Project Awareness
- Automatic detection of project type (language, framework)
- Configuration file parsing (package.json, requirements.txt, etc.)
- Understanding of coding conventions
- Recognition of test frameworks and build tools

### 6. Agent System
- Specialized agents for different tasks (code reviewer, tester, explorer)
- Parallel execution of independent tasks
- Autonomous operation within defined boundaries
- Task delegation and coordination

### 7. Security & Safety
- Secret/credential detection and protection
- Permission-based tool usage
- Audit trail of actions
- User confirmation for destructive operations

## How It Works

### Architecture

```
User Terminal <-> Kilo CLI <-> AI Model <-> Tools/Filesystem
     |                |            |             |
  Commands      Conversation   LLM/Claude   File System
  Input/Output   Management    API Calls    Shell Access
```

### Interaction Flow

1. **User Input**: User types a command or natural language request
2. **Context Gathering**: Kilo automatically:
   - Identifies active project and directory
   - Loads project configuration
   - Gathers relevant code context
   - Checks user permissions
3. **Intent Analysis**: AI determines required actions and tools
4. **Tool Execution**: Executes appropriate tools (read, edit, bash, grep, etc.)
5. **Response Generation**: AI synthesizes tool results into helpful response
6. **Output Display**: Results shown in terminal with optional formatting

### Tool Ecosystem

Kilo exposes several primitive tools to the AI:

- **read**: Read file contents with line numbers
- **write**: Create or overwrite files
- **edit**: Precise string replacement in files
- **grep**: Search file contents using regex
- **glob**: Find files matching patterns
- **bash**: Execute shell commands (with safety checks)
- **task**: Launch specialized sub-agents
- **websearch**: Search the internet for current info
- **webfetch**: Retrieve specific web pages

### Session Management

- Each conversation maintains context throughout the session
- Working directory and project root tracked
- Previous messages available for reference
- Tool call history preserved
- Configuration loaded from project/local/global levels

## Configuration

Kilo supports layered configuration:
1. **Global**: User-level settings (~/.config/kilo/)
2. **Project**: Repository-specific (.kilo/ in project root)
3. **Command**: Custom slash commands (.kilo/commands/)
4. **Agent**: Specialized agent definitions (.kilo/agents/)

## Use Cases

### For Individual Developers
- "Explain how this authentication module works"
- "Refactor this function to handle errors better"
- "Find all places where this API is called"
- "Write tests for this new feature"
- "Review my PR for security issues"

### For Teams
- Onboarding new developers
- Codebase exploration and documentation
- Consistent code review standards
- Automated quality checks
- Knowledge capture

### For Learning
- Understanding unfamiliar codebases
- Learning new frameworks or patterns
- Getting code examples and explanations
- Best practice guidance

## Safety & Ethics

Kilo is designed with safety in mind:
- Never executes commands without user awareness
- Protects sensitive information (API keys, passwords)
- Warns about potentially destructive operations
- Respects existing code and conventions
- Makes minimal assumptions about intent
- Promotes best practices without being pushy

## Integration Points

- Works in any terminal (PowerShell, Bash, Zsh, etc.)
- No IDE required (but complements them)
- Git-aware for version control contexts
- Language-agnostic (Python, JavaScript, Rust, etc.)
- Framework-agnostic (React, Django, Express, etc.)

---

*Kilo enhances developer productivity by combining the power of modern AI with the familiarity and control of command-line workflows.*