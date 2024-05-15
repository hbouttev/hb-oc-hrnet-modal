# DO NOT USE THIS MODULE, THIS IS A DEMO/ EXERCISE AND WILL BE DELETED

## Exercise module for OC HRNET

Data table React component.

# HRNet modal React component

This is a React component that displays a modal. It is a part of the HRNet
project.
The component is based on the Radix dialog primitive with some wrappers. This
allows for easy customization and composition.

This module is tested with Node 21. It should work with Node version >= 18

## Usage

You can read the Radix documentation for more information about the
primitives : [Radix Dialog](https://www.radix-ui.com/primitives/docs/components/dialog)

Basic usage:

```jsx
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
} from 'hb-oc-hrnet-modal';
```

```jsx
<Dialog>
  <DialogTrigger>Open</DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Title</DialogTitle>
      <DialogDescription>
        Description
      </DialogDescription>
    </DialogHeader>
  </DialogContent>
</Dialog>
```

With controlled state:

```jsx
const MyComponent = () => {
  const [open, setOpen] = React.useState(false);

  return (
    <div>
      <button onClick={() => setOpen(true)}>Open modal</button>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogHeader>
          <h2>Modal title</h2>
        </DialogHeader>
        <DialogContent>
          <DialogDescription>
            <p>Modal content</p>
          </DialogDescription>
        </DialogContent>
      </Dialog>
    </div>
  );
};
```

## Styling

The module provides a default css file for basic style. It can be overridden by passing custom `style` or `className`
props to the components.

For wrapper with multiple primitives, a `classNames` and a `styles` object props are provided to style the children
primitives.

Example using Tailwind:

```jsx
<Dialog>
  <DialogContent
    classNames={{
      overlay:
        'fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0',
      content:
        'fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg',
      close:
        'absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground',
    }}
  >
    <DialogHeader className="flex flex-col space-y-1.5 text-center sm:text-left">
      <DialogDescription className="text-sm text-muted-foreground">
        Employee Created!
      </DialogDescription>
    </DialogHeader>
  </DialogContent>
</Dialog>
```
