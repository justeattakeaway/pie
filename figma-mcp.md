# Figma MCP and Code Connect

## Summary - What is Figma MCP?

Figma MCP is Figma's Model Context Protocol server. It allows supported MCP clients such as VS Code and other AI coding tools to authenticate with Figma and retrieve structured design context from files, frames, and components.

That context can include things like:

- selected frames and layers
- layout structure and spacing
- component and variant information
- design variables and tokens
- Code Connect mappings to real code components

Figma currently recommends the remote MCP server for most teams. The desktop server exists, but is mainly intended for more specific enterprise use cases.

## How to install

The Figma MCP is a server that runs locally and provides design metadata to the AI agents. It can be configured in different ways, depending on the coding tool used. The MCP server can be started from the Figma desktop app or from the coding tool, depending on the setup.

!!! info "Note the owner of the Figma file" 
    The availability of the Figma MCP server depends on who owns a particular file. Trying to run it on files that don’t belong to the organisation will lead to limitations

It's better to follow [Figma official set up instructions](https://help.figma.com/hc/en-us/articles/32132100833559-Guide-to-the-Figma-MCP-server) as they can change. We capture here the two most used in JET, but keep in mind this may change in the future: 


### VS Code

Follow the instructions provided [here](https://justeattakeaway.atlassian.net/wiki/spaces/WPG/pages/8849621806/DSW-3709+-+Figma+MCP+and+Code+Connect#VSCode-setup)


### OpenCode

Unlike VScode, OpenCode (and likely other MCP clients) will not take advantage of JET's standard MCP configuration, and will need to be manually configured.

Follow the instructions provided [here](https://justeattakeaway.atlassian.net/wiki/spaces/WPG/pages/8849621806/DSW-3709+-+Figma+MCP+and+Code+Connect#OpenCode-setup-(or-others)) 


## Code Connect

Code Connect links Figma components to real components in your codebase. This gives Figma MCP better implementation context and usually improves the quality of generated code and explanations.

The current working assumption for JET should be:

- feel free to experiment locally if you want to understand how it works
- feel free to connect or modify mappings for **your own components** when appropriate
- do not modify configuration for PIE components without agreeing the change first. You can reach out to #help-designsystem for any questions
- if you think the shared setup should change, raise it with the owning team before making that change

This matters because Code Connect influences how Figma MCP describes our components to AI tools. Unreviewed changes can degrade output quality or create confusion across teams.

For broader setup, ownership, and implementation guidance, use the internal Confluence page: [Figma MCP and Code Connect](https://justeattakeaway.atlassian.net/wiki/spaces/WPG/pages/8849621806/DSW-3709+-+Figma+MCP+and+Code+Connect#What-is-Code-Connect-(CC)).


## How to use it in JET

The best use cases at JET are the ones where design context improves engineering decisions, not just code generation speed.

### Good use cases

#### 1. Implementing a new UI flow from a Figma frame

Use Figma MCP when you have a clear design and want your agent to inspect the frame, identify layout structure, spacing, variants, and relevant components before you implement it.

This is especially useful when:

- the screen is built from existing design-system components
- the design includes multiple variants or states
- you want the agent to explain the structure before it starts coding

#### 2. Understanding design intent before editing an existing screen

When working on a feature that already exists, Figma MCP can help you compare the current implementation with the latest design context from Figma. This is useful for refinement work, bug fixing, and UI consistency checks.

#### 3. Working with design-system components more accurately

Figma MCP becomes more useful when Code Connect is in place. In that case, the agent can reference the actual component relationships instead of inferring everything from raw visual structure.

This is a strong fit for teams working in shared component libraries or feature areas with strict design-system constraints.

!!! info "Code Connect PIE support"
    The PIE team is looking into prioritising a full Code Connect setup for PIE components. If you find this useful, please reach out to us so we can understand the demand to do this sooner rather than later


#### 4. Preparing better handoff conversations between design and engineering

Figma MCP can help turn a frame, flow, or component into something easier to discuss. For example, you can ask an agent to summarise the structure, call out reusable components, identify missing states, or list questions before implementation starts.

### Use it carefully for

- generating first-pass UI code that still needs engineering review
- exploring layout and token decisions before implementation
- capturing design context for refactors or migrations

### Not the default use case

Figma MCP is usually not the best tool when the main problem is business logic, backend integration, or architecture. In those cases, use it only for the UI part of the work.

## Getting started prompts

Once connected, start with simple, explicit prompts. For example:

- `Use this Figma frame URL to explain the layout, spacing, and component structure before writing any code.`
- `Compare this Figma frame with the existing implementation and list the main UI differences.`
- `Identify which parts of this design should map to existing design-system components.`
- `Use the Figma context to propose a safe implementation plan for this screen.`

## Further reading

- [Figma MCP and Code Connect - Pie initial exploration](https://justeattakeaway.atlassian.net/wiki/spaces/WPG/pages/8849621806/DSW-3709+-+Figma+MCP+and+Code+Connect)
- [Guide to the Figma MCP server](https://help.figma.com/hc/en-us/articles/32132100833559-Guide-to-the-Figma-MCP-server)
- [Remote Figma MCP server installation](https://developers.figma.com/docs/figma-mcp-server/remote-server-installation/)
- [Tools and prompts](https://developers.figma.com/docs/figma-mcp-server/tools-and-prompts/)
- [Code Connect overview](https://help.figma.com/hc/en-us/articles/23920389749655-Code-Connect)
- [Set up instructions from JET code Fest](https://justeat.slack.com/archives/C0AE4S4GHEE/p1772110240863749)

