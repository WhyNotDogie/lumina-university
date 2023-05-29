# Introduction to Rust game development

:::note
This course assumes you already know the basics of rust, such
as the borrow checker, lifetimes, traits, etc.
:::

## What you will learn

In this course you will learn:
- How to make a window appear.
- How to import bevy plugins.
- How Bevy's ECS (Entity Component System) works.
- How to draw onto the window.

## Why Bevy?
Bevy is an excellent choice for your first Rust game engine due to its modern design, simplicity, and comprehensive documentation. Its intuitive entity-component system and active community support make learning game development in Rust accessible and enjoyable.

## Setup
First, If you didn't already, [install rust](https://www.rust-lang.org/tools/install). Then, create a new folder called `bevy_gamedev_course`.
Open that folder in your preferred code editor (I recommend [VSCode](https://code.visualstudio.com/download) or [Neovim](https://github.com/neovim/neovim/wiki/Installing-Neovim)). Then, open the terminal in that folder and run: 
```bash
cargo init
cargo add bevy
```
This will create a new rust project in the `bevy_gamedev_course` directory.
Now run this command in your terminal, and it should start saying a bunch of things:
```
cargo build
```
Now don't worry if you see a bunch of error messages, that is supposed to happen. But, if
you didn't see any error messages, you can safely skip the next step.

### Installing Dependencies

#### Linux
If you are on linux, go [here](https://github.com/bevyengine/bevy/blob/main/docs/linux_dependencies.md).

#### Windows
For windows users, follow the instructions [here](https://bevyengine.org/learn/book/getting-started/setup/#windows), under "windows".

#### MacOS
For MacOS users, Install the Xcode command line tools with `xcode-select --install` in the terminal or the [Xcode app](https://apps.apple.com/en/app/xcode/id497799835).

## Testing to see if it works
Now, run `cargo build` again. It should work. If not, refer to [The Official Documentation for Bevy](https://bevyengine.org/learn/book/getting-started/setup/), and/or Bevy's [Troubleshooting Page](https://bevyengine.org/learn/book/troubleshooting/).