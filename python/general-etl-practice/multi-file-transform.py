import pandas as pd
import os
import logging

logging.basicConfig(
  level = logging.INFO,
  format = "%(asctime)s - %(levelname)s - %(message)s",
  handlers = [
    logging.FileHandler("logs/normalization.log", mode="w"),
    logging.StreamHandler()
  ]
)
logger = logging.getLogger(__name__)

COLUMN_MAP = {
  "insp_date": "inspection_date",
  "inspection_dt": "inspection_date",
  "date": "inspection_date",
  "vend": "vendor_name",
  "vendor": "vendor_name",
  "result": "inspection_result",
  "insp_result": "inspection_result",
  "pass_fail": "inspection_result"
}

REQUIRED_COLUMNS = {"inspection_date", "vendor_name", "inspection_result"}

def normalize_cols(df):
  df.columns = df.columns.str.strip().str.lower().str.replace(" ", "_", regex=False)
  df = df.rename(columns=COLUMN_MAP)
  return df

def validate_cols(df):
  missing = REQUIRED_COLUMNS - set(df.columns)
  if missing:
    raise ValueError(f"Missing required columns: {missing}")
  return df

def process_file(filepath):
  df = pd.read_csv(filepath)
  df = normalize_cols(df)
  df = validate_cols(df)
  # add a new column to each row indicating the file it came from
  df["source_file"] = os.path.basename(filepath)
  return df

def process_all_files(folder_path):
  all_dataframes = []
  failed_files = []

  files = [f for f in os.listdir(folder_path) if f.endswith(".csv") and f.startswith("incoming_data_")]

  if not files:
    logger.error("No CSV files found to process")
    raise Exception("No CSV files found to process")
  
  logger.info(f"Found {len(files)} CSV files to process")

  for filename in files:
    filepath = os.path.join(folder_path, filename)
    try:
      df = process_file(filepath)
      all_dataframes.append(df)
      logger.info(f"Successfully processed: {filename}")
    except Exception as e:
      logger.error(f"Failed to process {filename}: {e}", exc_info=True)
      failed_files.append(filename)

  if not all_dataframes:
    logger.error("No files could be successfully processed.")
    raise Exception("Pipeline failed. No files could be successfully processed.")

  combined = pd.concat(all_dataframes, ignore_index=True)
  combined.to_csv(os.path.join(folder_path, "normalized_output.csv"), index=False)

  logger.info(f"Finished. {len(all_dataframes)} succeeded, {len(failed_files)} failed.")
  if failed_files:
    logger.error(f"Failed files: {failed_files}")
    raise Exception(f"Pipeline completed with {len(failed_files)} failures")
  
process_all_files("files")