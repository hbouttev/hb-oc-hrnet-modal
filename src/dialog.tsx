import * as React from 'react';
import * as DialogPrimitive from '@radix-ui/react-dialog';
import { X } from 'lucide-react';

const Dialog = DialogPrimitive.Root;

const DialogTrigger = DialogPrimitive.Trigger;

const DialogPortal = DialogPrimitive.Portal;

const DialogClose = DialogPrimitive.Close;

const DialogOverlay = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Overlay>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Overlay
    ref={ref}
    className={className || 'hrnet-dialog-overlay'}
    {...props}
  />
));
DialogOverlay.displayName = DialogPrimitive.Overlay.displayName;

const DialogContent = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content> & {
    classNames?: {
      content?: string;
      overlay?: string;
      close?: string;
    };
    styles?: {
      content?: React.CSSProperties;
      overlay?: React.CSSProperties;
      close?: React.CSSProperties;
    };
    closeIcon?: React.ReactNode;
  }
>(({ className, children, classNames, closeIcon, styles, ...props }, ref) => (
  <DialogPortal>
    <DialogOverlay className={classNames?.overlay} style={styles?.overlay} />
    <DialogPrimitive.Content
      ref={ref}
      className={
        classNames?.content
          ? classNames?.content
          : className
            ? className
            : 'hrnet-dialog-content'
      }
      style={styles?.content}
      {...props}
    >
      {children}
      <DialogPrimitive.Close
        className={classNames?.close || 'hrnet-dialog-close'}
        style={styles?.close}
      >
        {closeIcon ?? (
          <>
            <X style={{ height: '1rem', width: '1rem' }} />
            <span className="hrnet-sr-only">Close</span>
          </>
        )}
      </DialogPrimitive.Close>
    </DialogPrimitive.Content>
  </DialogPortal>
));
DialogContent.displayName = DialogPrimitive.Content.displayName;

const DialogHeader = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={className || 'hrnet-dialog-header'} {...props} />
);
DialogHeader.displayName = 'DialogHeader';

const DialogFooter = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={className || 'hrnet-dialog-footer'} {...props} />
);
DialogFooter.displayName = 'DialogFooter';

const DialogTitle = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Title>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Title
    ref={ref}
    className={className || 'hrnet-dialog-title'}
    {...props}
  />
));
DialogTitle.displayName = DialogPrimitive.Title.displayName;

const DialogDescription = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Description>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Description
    ref={ref}
    className={className || 'hrnet-dialog-description'}
    {...props}
  />
));
DialogDescription.displayName = DialogPrimitive.Description.displayName;

export {
  Dialog,
  DialogPortal,
  DialogOverlay,
  DialogClose,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogDescription,
};
