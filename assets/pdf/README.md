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
3. Update `_pages/cv.md` if you want to display the PDF on the CV page:
   ```yaml
   cv_pdf: /assets/pdf/lillian_jiang_cv.pdf
   cv_format: pdf
   ```

## Displaying Your CV on the Website

You have three options for displaying your CV on the `/cv/` page:

### Option 1: Direct PDF Display (Simplest)
Display your CV PDF directly without conversion:

1. Place your CV PDF in `assets/pdf/` (e.g., `cv_20251030.pdf`)
2. Update `_pages/cv.md`:
   ```yaml
   cv_pdf: /assets/pdf/cv_20251030.pdf
   cv_format: pdf
   ```

This will embed your PDF directly on the CV page with a download button.

### Option 2: RenderCV Format (Dynamic)
Use YAML format with automatic PDF generation:

1. Edit `_data/cv.yml` with your CV information
2. Update `_pages/cv.md`:
   ```yaml
   cv_format: rendercv
   ```

The system will render your CV as HTML and generate a PDF automatically.

### Option 3: JSONResume Format (Standard)
Use the standard JSONResume format:

1. Edit `assets/json/resume.json` with your CV information
2. Update `_pages/cv.md`:
   ```yaml
   cv_format: jsonresume
   ```

## Current Configuration

The CV link in `_data/socials.yml` is currently set to:
```yaml
cv_pdf: /assets/pdf/cv_20251030.pdf
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
