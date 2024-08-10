import os

def read_files_in_directory(directory, output_file, exclude_dirs):
    with open(output_file, 'w', encoding='utf-8') as outfile:
        for root, dirs, files in os.walk(directory):
            # Exclude the specified directories
            dirs[:] = [d for d in dirs if os.path.join(root, d) not in exclude_dirs]
            
            for file in files:
                file_path = os.path.join(root, file)
                
                # Write the start of file explanation
                outfile.write(f"--- Start of file: {file_path} ---\n\n")
                
                with open(file_path, 'r', encoding='utf-8') as infile:
                    outfile.write(infile.read())
                
                # Write the end of file explanation
                outfile.write(f"\n\n--- End of file: {file_path} ---\n\n")
                outfile.write("\n" + "="*80 + "\n\n")

# Define the directory and output file
directory = r"C:\Users\USER\Desktop\JMR\JMR_EXAM_backend"
output_file = r"C:\Users\USER\Desktop\JMR\JMR_EXAM_backend\combined_files.txt"
exclude_dirs = [os.path.join(directory, 'node_modules')]

# Call the function
read_files_in_directory(directory, output_file, exclude_dirs)

print("All files have been read and written to the output file.")
