# How to Upload Your CV

## Quick Steps

1. **Replace the example PDF**: Replace `example_pdf.pdf` in this directory with your actual CV PDF file
   - Keep the filename as `example_pdf.pdf`, or
   - Update the `cv_pdf` path in `_data/socials.yml` to point to your new filename

2. **Option 1: Keep the same filename (Recommended)**
   ```bash
   # Simply replace the file
   cp /path/to/your/cv.pdf assets/pdf/example_pdf.pdf
   ```

3. **Option 2: Use a custom filename**
   - Place your CV PDF in this directory (e.g., `assets/pdf/lillian_jiang_cv.pdf`)
   - Update `_data/socials.yml`:
     ```yaml
     cv_pdf: /assets/pdf/lillian_jiang_cv.pdf
     ```

## Current Configuration

The CV link in `_data/socials.yml` is currently set to:
```yaml
cv_pdf: /assets/pdf/example_pdf.pdf
```

## Notes

- The CV link will appear as an icon at the bottom of your about page
- The jekyll-socials plugin automatically generates the CV icon link
- The file must be in PDF format for proper display
- Make sure the file is committed and pushed to your GitHub repository

## Alternative: Using RenderCV

For more advanced CV management, see the main [CUSTOMIZE.md](../../CUSTOMIZE.md) documentation for information about:
- Using RenderCV YAML format (`_data/cv.yml`)
- Automatic PDF generation via GitHub Actions
- JSON Resume format (`assets/json/resume.json`)
