# Projects

Things I built on my own time, mostly to scratch an itch from work.

---

## sf-bulker

**CLI tool for importing CSV data into Salesforce via the Bulk API v2.**

Salesforce Data Loader works fine for a one-off import. For repeated migration work where you're constantly tweaking mappings and re-running the same job, it gets annoying fast. sf-bulker reads everything from a JSON config file: the object, the operation, the field mapping, any per-row transforms. Define it once and run it as many times as you need.

- Config in `config.json`, versioned alongside your project
- No Java, just Node.js 18+
- OAuth 2.0 client credentials, no browser needed
- `rowTransform` functions let you clean or remap data before upload
- Outputs timestamped success/failure CSVs

[View on GitHub](https://github.com/Daedrico/sf-bulker)

---

## sf-pubsub

**Node.js listener for Salesforce Platform Events via the gRPC Pub/Sub API.**

Connects to a Salesforce org using OAuth client credentials and subscribes to any Platform Event. Payloads get saved to timestamped files. Setup is just a `.env` file.

- Subscribes from the earliest available event
- Event path configurable via env var
- Output is pretty-printed JSON, one file per minute

[View on GitHub](https://github.com/Daedrico/sf-pubsub)

---

## csv-to-object

**Node.js scripts that generate Salesforce metadata XML from CSV files.**

Give it a CSV, get back Salesforce metadata ready to deploy. Handles CustomObject field definitions and CustomMetadata records.

- `npm run fields` generates a `CustomObject` XML with field definitions
- `npm run cm` generates one CustomMetadata file per CSV row
- Supports Text, Currency, Number, Date, Picklist, MultiselectPicklist

[View on GitHub](https://github.com/Daedrico/csv-to-object)

---

## vs-code-rtpick-extension (SPRR)

**VS Code extension that shows which picklist values are enabled per RecordType.**

Open a `.object-meta.xml` file, run `SPRR: Create report` from the Command Palette, and get an interactive table showing all RecordTypes and their enabled picklist values. No files written to disk.

- Dropdown to select any picklist field by API name
- One column per RecordType
- Adapts to VS Code light and dark mode

[View on GitHub](https://github.com/Daedrico/vs-code-rtpick-extension)

---

## thate

**CLI tool for converting Salesforce translation files between `.stf` and `.xlsx`.**

The name is short for "translation hate". Clients work in Excel, Salesforce works with `.stf` files. thate converts in both directions.

- `thate excel` converts `.stf` to `.xlsx`
- `thate stf` converts `.xlsx` back to `.stf`
- `--omit` flag strips already-translated values from the Excel output
- Config file to set paths and filter unwanted entries
- Available on npm

[View on GitHub](https://github.com/Daedrico/thate) · [View on npm](https://www.npmjs.com/package/thate)
