---
description: Validate screenshots or image artifacts with the safest workflow
---

For `$ARGUMENTS`:

1. Do not assume the active model can inspect images directly.
2. First list the concrete image files involved and identify the most relevant one.
3. If the current model or connected MCP supports image inspection, analyze only the minimum necessary images.
4. If image inspection is unavailable or errors, stop retrying blindly and state the limitation clearly.
5. Correlate image evidence with logs or manifests when they exist.

Return a concise result:
- files inspected
- whether visual analysis actually ran
- state observed
- first visible blocker
- next step
