# How to Upload Your CV

## Quick Steps

**Replace the example PDF** with your actual CV using one of these options:

### Option 1: Keep the same filename (Recommended)
```bash
# Simply replace the file
cp /path/to/your/cv.pdf assets/pdf/example_pdf.pdf
```

### Option 2: Use a custom filename
1. Place your CV PDF in this directory (e.g., `assets/pdf/lillian_jiang_cv.pdf`)
2. Update `_data/socials.yml`:
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
