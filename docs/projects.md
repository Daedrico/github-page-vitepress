# Projects

A collection of tools I've built around Salesforce development.

---

## sf-bulker

**A CLI tool for importing CSV data into Salesforce using the Bulk API v2.**

Salesforce Data Loader works for one-off imports, but it becomes painful for iterative migration work — re-navigating wizards, re-loading field mappings, managing a Java dependency. sf-bulker takes a different approach: the entire job is described in a JSON config file. Field mappings, the target object, the operation, and per-row transform logic are all stored as code, versioned alongside your project, and reproducible with a single command.

- Config-driven: define once in `config.json`, run as many times as needed
- No Java, no GUI — just Node.js 18+
- OAuth 2.0 client credentials flow, safe to run unattended
- Per-row `rowTransform` functions for cleaning, remapping, or recalculating fields before upload
- Outputs timestamped success/failure CSVs after each job

[View on GitHub →](https://github.com/Daedrico/sf-bulker)

---

## sf-pubsub

**A Node.js listener for Salesforce Platform Events via the gRPC Pub/Sub API.**

Connects to your Salesforce org using OAuth client credentials and subscribes to any Platform Event. Incoming payloads are enhanced with a human-readable `CreatedDateTime` field and saved to timestamped files in a `payloads/` directory — no setup beyond a `.env` file.

- Subscribes from the earliest available event to avoid missing data
- Configurable event path via environment variables
- Auto-creates the output directory on first run
- Payload output: pretty-printed JSON, one file per minute

[View on GitHub →](https://github.com/Daedrico/sf-pubsub)

---

## csv-to-object

**Node.js scripts that generate Salesforce metadata XML from CSV input files.**

Takes structured CSV files as input and produces ready-to-deploy Salesforce metadata: CustomObject field definitions and CustomMetadata records. Useful during implementation projects where fields or records need to be defined in bulk.

- `npm run fields` — generates a `CustomObject` XML file with field definitions from a CSV
- `npm run cm` — generates one CustomMetadata file per row in the input CSV
- Supports Text, Currency, Number, Date, Picklist, and MultiselectPicklist field types

[View on GitHub →](https://github.com/Daedrico/csv-to-object)

---

## vs-code-rtpick-extension (SPRR)

**A VS Code extension that shows which picklist values are enabled per RecordType.**

Working with Salesforce `.object-meta.xml` files and needing to audit picklist configurations across RecordTypes is tedious when done manually. SPRR (Salesforce Picklist by RecordType Report) parses the active metadata file and opens an interactive panel directly in the editor — no files written to disk.

- Select any picklist field from a dropdown
- View a table with one column per RecordType and enabled values listed below
- Theme-aware: adapts to VS Code light and dark mode
- Trigger via Command Palette: `SPRR: Create report`

[View on GitHub →](https://github.com/Daedrico/vs-code-rtpick-extension)

---

## thate

**A CLI tool for converting Salesforce translation files between `.stf` and `.xlsx`.**

The name is short for "translation hate". Managing Salesforce translation files is tedious: the `.stf` format is not something clients can work with directly, and the manual round-trip between `.stf` and Excel is error-prone. thate handles the conversion in both directions from the command line.

- `thate excel` converts `.stf` files to `.xlsx`
- `thate stf` converts `.xlsx` files back to `.stf`
- `--omit` flag strips already-translated values from the Excel output, useful when sending files out for a second-pass review
- Config file (`.thate.json`) lets you set input/output paths and filter out unwanted translation entries
- Available on npm, installable globally or as a project dependency

[View on GitHub →](https://github.com/Daedrico/thate) · [View on npm →](https://www.npmjs.com/package/thate)
