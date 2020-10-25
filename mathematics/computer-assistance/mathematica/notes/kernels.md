# Execution order
- The fact that one expression may appear earlier than another in your notebook does not mean that it will have been evaluated first by the kernel. This will only be the case if it has a lower line number.
- The exception to the rule above is when an output contains the formatted results of a *Dynamic* or *Manipulate* function. Such outputs will reevaluate in the kernel on an as-needed basis long after the evaluation which initially created them. See [Dynamic Interactivity Language](https://reference.wolfram.com/language/guide/DynamicInteractivityLanguage.html)