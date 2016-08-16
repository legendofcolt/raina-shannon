// Widowtamer
// About page header
wt.fix({
  elements: '.About h1',
  chars: 15,
  method: 'nbsp',
  event: 'resize'
});

// About paragraphs
wt.fix({
  elements: '.About p',
  chars: 15,
  method: 'padding-right',
  event: 'resize'
});
